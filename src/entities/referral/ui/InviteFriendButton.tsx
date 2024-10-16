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
  const currentUser = useAppSelector((state) => state.user.currentUser)
  const referralCode = useAppSelector((state) => state.referral.referralCode)
  const isLoading = useAppSelector((state) => state.referral.isLoading)
  const inviteLink = `https://t.me/PopcornCapitals_Bot/app?ref=${referralCode}`

  const handleInviteClick = () => {
    if (currentUser && !isLoading) {
      dispatch(generateReferralCode({ userId: currentUser.id }))
        .unwrap()
        .then(() => handleCopyLink())
        .catch((error) =>
          console.error('Ошибка при генерации реферального кода:', error)
        )
    }
  }

  const handleCopyLink = () => {
    if (referralCode) {
      navigator.clipboard
        .writeText(inviteLink)
        .then(() => {
          setCopied(true)
        })
        .catch((error) => console.error('Ошибка при копировании: ' + error))
    }
  }

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [copied])

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
