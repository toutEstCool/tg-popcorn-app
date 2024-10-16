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
      if (window.Telegram?.WebApp) {
        try {
          //@ts-ignore
          window.Telegram.WebApp.showPopup({
            message: 'Скопируйте эту ссылку: ' + inviteLink,
            buttons: [{ text: 'OK', id: 'ok' }]
          })
          setCopied(true)
          setTimeout(() => setCopied(false), 3000)
        } catch (error) {
          console.error('Ошибка при использовании Telegram API: ', error)
        }
      } else {
        const tempInput = document.createElement('textarea')
        tempInput.value = inviteLink
        document.body.appendChild(tempInput)
        tempInput.select()
        try {
          document.execCommand('copy')
          setCopied(true)
          setTimeout(() => setCopied(false), 3000)
        } catch (error) {
          console.error(
            'Ошибка при копировании с использованием execCommand: ',
            error
          )
        }
        document.body.removeChild(tempInput)
      }
      setShouldCopy(false)
    }
  }

  return (
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
  )
}
