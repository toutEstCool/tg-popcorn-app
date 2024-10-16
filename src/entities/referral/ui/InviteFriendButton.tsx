import { useEffect, useState, useRef } from 'react'
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
  const inviteLink = `https://t.me/PopcornCapitals_Bot/app?ref=${referralCode}`
  const inputRef = useRef<HTMLTextAreaElement | null>(null)

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
    if (referralCode && inputRef.current) {
      inputRef.current.select()
      try {
        const successful = document.execCommand('copy')
        if (successful) {
          setCopied(true)
          setTimeout(() => setCopied(false), 3000)
        }
      } catch (error) {
        console.error('Ошибка при копировании: ', error)
      }
    }
    setShouldCopy(false)
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
      {referralCode && (
        <textarea
          ref={inputRef}
          value={inviteLink}
          readOnly
          style={{ position: 'absolute', left: '-9999px' }}
        />
      )}
    </div>
  )
}
