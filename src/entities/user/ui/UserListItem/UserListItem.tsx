import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import s from './UserListItem.module.css'
import { UsersListSchema } from '../../model/types/UserSchema'

interface IUserListItemProps {
  user: UsersListSchema
}

export const UserListItem = ({ user }: IUserListItemProps) => {
  return (
    <Link className={s.topUserInfoContainer} to={`/user-profile/${user?.id}`}>
      <div className={s.topUserInfoWrapper}>
        <div className={s.topUserAvatar} />
        <div className={s.topUserInfo}>
          <span className={s.userInfoLvl}>LVL {user?.score}. Кит</span>
          <span className={s.userInfoNickName}>@{user?.userName}</span>
        </div>
      </div>
      <ChevronRight color="#7C7C7C" />
    </Link>
  )
}
