import { memo } from 'react'
import s from './UserXPBar.module.css'
import classNames from 'classnames'

interface IUserXPBarProps {
  className?: string
  score?: number
}

export const UserXPBar = memo(({ className, score }: IUserXPBarProps) => {
  return (
    <div className={classNames(s.UserXPBarWrapper, className)}>
      <span className={s.userLvl}>LVL 1. Хомяк</span>
      <div className={s.progressSection}>
        <div className={s.progressCountSection}>
          <span>550</span>
          <span>popcorn coin 1000</span>
        </div>
      </div>
      <div
        style={{ background: '#FFFFFF1C', height: '9px', borderRadius: '28px' }}
      >
        <div
          style={{
            height: '9px',
            background: '#DBB157',
            width: `${score}%`,
            borderRadius: '28px'
          }}
        ></div>
      </div>
    </div>
  )
})
