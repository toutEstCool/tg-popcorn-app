import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { generateReferralCode } from '../model/services/generateReferralCode/generateReferralCode'
import { useReadTextFromClipboard } from '@vkruglikov/react-telegram-web-app'

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

  const readClipboardText = useReadTextFromClipboard()

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
    if (referralCode && window.Telegram?.WebApp) {
      try {
        //@ts-ignore
        window.Telegram.WebApp.setClipboardText(inviteLink)
        //@ts-ignore
        window.Telegram.WebApp.showPopup({
          message: 'Ссылка скопирована в буфер обмена!',
          buttons: [{ text: 'OK', type: 'close' }]
        })
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      } catch (error) {
        console.error('Ошибка при использовании Telegram API: ', error)
      }
      setShouldCopy(false)
    } else {
      console.error('Telegram WebApp не найден или нет referralCode.')
    }
  }

  const handleReadClipboard = async () => {
    try {
      const clipboardText = await readClipboardText()
      console.log('Текст из буфера обмена:', clipboardText)
    } catch (error) {
      console.error('Ошибка при чтении текста из буфера обмена:', error)
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

      <button onClick={handleReadClipboard}>
        Прочитать текст из буфера обмена
      </button>
    </div>
  )
}
