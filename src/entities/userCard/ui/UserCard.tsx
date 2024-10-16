import React from 'react'
import { UiUserCard } from '../../../shared/ui/UserCard'
import s from './UserCard.module.css'
import { UserAvatar } from '../../../shared/ui/UserAvatar'
import { Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { UserXPBar } from '../../../shared/ui/UserXPBar'

interface IUserCardProps {
  userProfile: {
    id: string
    fullName: string
    accountName?: string
  }
  isOwnProfile?: boolean
}

export const UserCard: React.FC<IUserCardProps> = React.memo(
  ({ userProfile, isOwnProfile }) => {
    const mokUserAvatarUrl =
      'https://s3-alpha-sig.figma.com/img/6269/cc73/d9d4686cc309a37f1a82fc6c39b8ba87?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McWF~lauPKAiKDbeUy1mFx8pQI5nEapb0CepUsHKZB98-alD0AbW57aa73gdoqkBQI96OK2Io8K75eXjCamRqLU9E5CS3wl02ayNq1KbAzivK2fLbvIcbg5NLJOta5r7qNxnXad2JhsUQo2r3PDBf4E-znqw8oH2fWxfR0u9K4WHPH0nJI7pQeA8TQ4re1BPxzeolg5uztRpG8U6eTEhbwL3vPdjGKcWkaIKTe~wAu7R3-GrwuQvBYQODvbmqeOR4-Cq8DisZoWtxifcGfBxr5r3yVHSQNnSK9FB-9MnPqIrlSG6zzAkMFZ~H-MTda68r1CqmShcQswUh0JvVc~udw__'

    return (
      <UiUserCard>
        <div className={s.UserCardWrapper}>
          <UserAvatar size={90} src={mokUserAvatarUrl} />
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
        <UserXPBar className={s.xbBar} />
      </UiUserCard>
    )
  }
)
