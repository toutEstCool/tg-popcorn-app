import { useEffect } from 'react'
import {
  fetchUserAchievements,
  getAllAchievements,
  getAllAchievementsIsLoading
} from '../../../entities/achievements'
import { AchievementsList } from '../../../features/achievements'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './AchievemenPage.module.css'
import { Loader } from '../../../shared/ui/Loader'
import { getCurrentUser } from '../../../entities/user'

export const AchievementPage = () => {
  const dispatch = useAppDispatch()
  const achievements = useAppSelector(getAllAchievements)
  const isLoading = useAppSelector(getAllAchievementsIsLoading)
  const currentUser = useAppSelector(getCurrentUser)
  const userId = currentUser?.id

  useEffect(() => {
    if (userId && !achievements.length) {
      dispatch(fetchUserAchievements({ userId, skip: 0, take: 100 }))
    }
  }, [dispatch, userId, achievements.length])

  return (
    <AppLayout>
      <HeaderWithBackButton title="Достижения" />
      {isLoading ? (
        <div className={s.loader}>
          <Loader />
        </div>
      ) : (
        <div className={s.achievementsScrollWrapper}>
          <AchievementsList
            achievements={achievements}
            className={s.achivement}
          />
        </div>
      )}
    </AppLayout>
  )
}
