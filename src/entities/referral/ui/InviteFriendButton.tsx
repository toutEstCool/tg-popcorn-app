import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { generateReferralCode } from '../model/services/generateReferralCode/generateReferralCode'
import { useClipboard } from 'use-clipboard-copy'

import s from './InviteFriendButton.module.css'

interface IInviteFriendButtonProps {
  className?: string
}

export const InviteFriendButton = ({ className }: IInviteFriendButtonProps) => {
  const dispatch = useAppDispatch()
  const [copied, setCopied] = useState(false)
  const [shouldCopy, setShouldCopy] = useState(false)
  const currentUser = useAppSelector((state) => state.user.currentUser)
  const referralCode = useAppSelector((state) => state.referral.referralCode)
  const isLoading = useAppSelector((state) => state.referral.isLoading)
  const inviteLink = `https://t.me/PopcornCapitals_Bot/app?startapp=${referralCode}`
  const clipboard = useClipboard()

  const handleInviteClick = async () => {
    if (currentUser && !isLoading) {
      try {
        await dispatch(
          generateReferralCode({ userId: currentUser.id })
        ).unwrap()
        setShouldCopy(true)
      } catch (error) {
        console.error('Ошибка при генерации реферального кода:', error)
      }
    }
  }

  useEffect(() => {
    if (shouldCopy && referralCode) {
      handleCopyLink()
    }
  }, [shouldCopy, referralCode])

  const handleCopyLink = async () => {
    if (referralCode) {
      try {
        clipboard.copy()
        navigator.share({
          title: 'PopcornCapitals_Bot',
          url: inviteLink
        })

        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
        // }
        //@ts-ignore
        if (window.Telegram?.WebApp?.clipboardTextReceived) {
          //@ts-ignore
          window.Telegram.WebApp.clipboardTextReceived(inviteLink)
          setCopied(true)
          setTimeout(() => setCopied(false), 3000)
        }
        if (
          //@ts-ignore
          !window.Telegram?.WebApp?.setClipboardText &&
          !navigator?.clipboard?.writeText
        ) {
          alert(
            'Ваше устройство не поддерживает автоматическое копирование. Пожалуйста, скопируйте ссылку вручную.'
          )
        }
      } catch (error) {
        console.error('Ошибка при копировании ссылки: ', error)
      }
      setShouldCopy(false)
    } else {
      console.error('Нет доступного referralCode.')
    }
  }

  return (
    <div>
      <button
        className={className}
        onClick={handleInviteClick}
        disabled={isLoading}
      >
        {isLoading
          ? 'Генерация...'
          : copied
          ? 'Реферальный код скопирован'
          : 'Пригласить друга'}
      </button>
      <br />
      {referralCode && (
        <input
          defaultValue={inviteLink}
          ref={clipboard.target}
          className={s.inviteLink}
          readOnly
        />
      )}
    </div>
  )
}
