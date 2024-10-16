import { useDispatch } from 'react-redux'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './UserProfilePage.module.css'

import { AppDispatch } from '../../../app/providers/store/ui/MainStore'
import { useEffect } from 'react'

export const UserProfilePage = () => {
  // const userProfile = useSelector(selectUserProfile)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // dispatch(fetchUserProfile({ userId: 'some-user-id' }))
  }, [dispatch])

  return (
    <AppLayout>
      <HeaderWithBackButton title={''} />
      <div className={s.profilePageContainer}>
        {/* <UserCard userProfile={userProfile} isOwnProfile={false} /> */}
        {/* <AchievementsList /> */}
      </div>
    </AppLayout>
  )
}
