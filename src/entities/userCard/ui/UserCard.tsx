import React from 'react'
import { UiUserCard } from '../../../shared/ui/UserCard'
import s from './UserCard.module.css'
import { UserAvatar } from '../../../shared/ui/UserAvatar'
import { Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { UserXPBar } from '../../../shared/ui/UserXPBar'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { getUserAvatar } from '../../../features/authByInitData'

interface IUserCardProps {
  userProfile: {
    id: string
    fullName: string
    accountName?: string
    score: number
    gradeInfo?: {
      grade: string
      level: number
      progressPercents: number
      scoreFromInclusive: number
      scoreToExclusive: number
    }
  }
  isOwnProfile?: boolean
}

export const UserCard: React.FC<IUserCardProps> = React.memo(
  ({ userProfile, isOwnProfile }) => {
    const photoUrl = useAppSelector(getUserAvatar)
    const avatarUrl =
      photoUrl ||
      'https://i.pinimg.com/736x/8d/12/26/8d1226b85884733d510d1292fe9fc014.jpg'

    return (
      <UiUserCard>
        <div className={s.UserCardWrapper}>
          <UserAvatar size={90} src={avatarUrl} />
          <div className={s.userInfoBlockWrapper}>
            <div className={s.userNameWrapper}>
              {!isOwnProfile && (
                <span className={s.userPopcorn}>popcorn base</span>
              )}
              <h3 className={s.userName}>{userProfile.fullName}</h3>
              <span className={s.userNick}>@{userProfile.accountName}</span>
            </div>
            {isOwnProfile && (
              <Link
                to={'/settings'}
                aria-label="Настройки пользователя"
                className={s.settingsLink}
              >
                <Settings color="#7C7C7C" className={s.icon} />
              </Link>
            )}
          </div>
        </div>
        <UserXPBar
          className={s.xbBar}
          score={userProfile?.score}
          gradeInfo={userProfile?.gradeInfo}
        />
      </UiUserCard>
    )
  }
)
