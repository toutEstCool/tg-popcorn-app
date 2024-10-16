import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './HeaderWithBackButton.module.css'
import { ChevronLeft } from 'lucide-react'

type HeaderWithBackButtonProps = {
  title: string
  onClick?: () => void
}

export const HeaderWithBackButton: React.FC<HeaderWithBackButtonProps> = ({
  title,
  onClick
}) => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    if (onClick) {
      onClick()
    } else {
      navigate(-1)
    }
  }

  return (
    <header className={s.headerContainer}>
      <button
        className={s.backButton}
        onClick={handleBackClick}
        aria-label="Вернуться назад"
      >
        <ChevronLeft width={33} height={33} color="white" />
      </button>
      <h1 className={s.title}>{title}</h1>
    </header>
  )
}
