import { useState } from 'react'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { generateReferralCode } from '../model/services/generateReferralCode/generateReferralCode'

interface IInviteFriendButtonProps {
  className?: string
}

declare global {
  interface Window {
    Telegram: any
  }
}

export const InviteFriendButton = ({ className }: IInviteFriendButtonProps) => {
  const dispatch = useAppDispatch()
  const [copied, setCopied] = useState(false)
  const currentUser = useAppSelector((state) => state.user.currentUser)
  const referralCode = useAppSelector((state) => state.referral.referralCode)
  const isLoading = useAppSelector((state) => state.referral.isLoading)
  const inviteLink = `https://t.me/PopcornCapitals_Bot/app?ref=${referralCode}`

  const handleInviteClick = async () => {
    if (currentUser && !isLoading) {
      try {
        await dispatch(
          generateReferralCode({ userId: currentUser.id })
        ).unwrap()
        setCopied(true)
        handleCopyLink()
      } catch (error) {
        console.error('Ошибка при генерации реферального кода:', error)
      }
    }
  }

  const handleCopyLink = async () => {
    if (referralCode) {
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(inviteLink)
          setCopied(true)
          setTimeout(() => setCopied(false), 3000)
        } catch (error) {
          console.error('Ошибка при копировании через Clipboard API:', error)
          fallbackCopyMethod()
        }
      } else {
        fallbackCopyMethod()
      }
    }
  }

  const fallbackCopyMethod = () => {
    const tempInput = document.createElement('textarea')
    tempInput.value = inviteLink
    document.body.appendChild(tempInput)
    tempInput.select()
    try {
      if (document.execCommand('copy')) {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
        if (window.Telegram?.WebApp) {
          window.Telegram.WebApp.HapticFeedback.impactOccurred('light')
        }
      } else {
        console.error('Ошибка: не удалось скопировать ссылку')
      }
    } catch (error) {
      console.error(
        'Ошибка при копировании с использованием execCommand:',
        error
      )
    }
    document.body.removeChild(tempInput)
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
