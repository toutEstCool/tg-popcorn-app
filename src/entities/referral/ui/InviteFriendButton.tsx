import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { generateReferralCode } from '../model/services/generateReferralCode/generateReferralCode'

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
        await navigator.clipboard.writeText(inviteLink)
        showPopup('Ссылка скопирована в буфер обмена!')
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      } catch (error) {
        console.error('Ошибка при копировании ссылки: ', error)
      }
      setShouldCopy(false)
    } else {
      console.error('Нет доступного referralCode.')
    }
  }

  const showPopup = (message: string) => {
    if (window.Telegram?.WebApp) {
      //@ts-ignore
      window.Telegram.WebApp.showPopup({
        message: message,
        buttons: [{ text: 'OK', type: 'close' }]
      })
    } else {
      alert(message)
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
    </div>
  )
}
