import { useEffect, useState } from 'react'
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
  const [shouldCopy, setShouldCopy] = useState(false)
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

  const handleCopyLink = () => {
    if (referralCode) {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(inviteLink)
          .then(() => {
            showSuccessMessage()
          })
          .catch((error) => {
            console.error('Ошибка при копировании через Clipboard API: ', error)
            fallbackCopyMethod()
          })
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
      const success = document.execCommand('copy')
      if (success) {
        showSuccessMessage()
      } else {
        console.error(
          'Ошибка при копировании: не удалось выполнить команду copy'
        )
        showManualCopyMessage()
      }
    } catch (error) {
      console.error(
        'Ошибка при копировании с использованием execCommand: ',
        error
      )
      showManualCopyMessage()
    }
    document.body.removeChild(tempInput)
  }

  const showSuccessMessage = () => {
    setCopied(true)
    if (window.Telegram?.WebApp) {
      // Использование Telegram WebApp для отображения сообщения
      window.Telegram.WebApp.showPopup({
        message: 'Ссылка скопирована в буфер обмена!',
        buttons: [{ text: 'OK', id: 'ok' }]
      })
    }
    // Сбрасываем статус после 3 секунд
    setTimeout(() => setCopied(false), 3000)
  }

  const showManualCopyMessage = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.showPopup({
        message: `Скопируйте ссылку вручную: ${inviteLink}`,
        buttons: [{ text: 'OK', id: 'ok' }]
      })
    } else {
      alert(`Скопируйте ссылку вручную: ${inviteLink}`)
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
