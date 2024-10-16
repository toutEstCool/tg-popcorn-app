import { useEffect } from 'react'
import {
  getCurrentUser,
  getUserError,
  getUserIsLoading,
  getUserProfile
} from '../../../entities/user'
import { UserCard } from '../../../entities/userCard'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { ReferralProgram } from '../../../shared/ui/ReferralProgram'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './ProfilePage.module.css'
import { fetchCurrentUser } from '../../../entities/user/model/services/fetchCurrentUser/fetchCurrentUser'
import { fetchUserProfile } from '../../../entities/user/model/services/fetchUserProfile/fetchUserProfile'
import { Loader } from '../../../shared/ui/Loader'

export const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector(getCurrentUser)
  const userProfile = useAppSelector(getUserProfile)
  const userIsLoading = useAppSelector(getUserIsLoading)
  const userError = useAppSelector(getUserError)

  useEffect(() => {
    if (!currentUser) {
      dispatch(fetchCurrentUser())
    }
  }, [dispatch, currentUser])

  useEffect(() => {
    if (currentUser && !userProfile) {
      dispatch(fetchUserProfile(currentUser.id))
    }
  }, [dispatch, currentUser, userProfile])

  if (userIsLoading) {
    return <Loader />
  }

  if (userError) {
    return (
      <AppLayout>
        <div className={s.profilePageContainer}>
          <p style={{ color: 'red' }}>Ошибка: {userError}</p>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className={s.profilePageContainer}>
        {userProfile && (
          <UserCard userProfile={userProfile} isOwnProfile={true} />
        )}
        {/* <AchievementsOverview isOwnProfile={true} /> */}
        <ReferralProgram />
      </div>
    </AppLayout>
  )
}
