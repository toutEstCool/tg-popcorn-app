import { useDispatch } from 'react-redux'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './UserProfilePage.module.css'

import { AppDispatch } from '../../../app/providers/store/ui/MainStore'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { getUserIsLoading, getUserProfile } from '../../../entities/user'
import { fetchUserProfile } from '../../../entities/user/model/services/fetchUserProfile/fetchUserProfile'
import { Loader } from '../../../shared/ui/Loader'
import { UserCard } from '../../../entities/userCard'
import { AchievementsOverview } from '../../../features/achievements'

export const UserProfilePage = () => {
  const { userId } = useParams<{ userId: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const userProfile = useAppSelector(getUserProfile)
  const userIsLoading = useAppSelector(getUserIsLoading)

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserProfile(userId))
    }
  }, [dispatch, userId])

  if (userIsLoading) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    )
  }

  return (
    <AppLayout>
      <HeaderWithBackButton title={''} />
      <div className={s.profilePageContainer}>
        {userProfile && (
          <>
            <UserCard userProfile={userProfile} isOwnProfile={false} />
            <AchievementsOverview
              coutRequest={10}
              isOwnProfile={false}
              userId={userProfile.id}
            />
          </>
        )}
      </div>
    </AppLayout>
  )
}
