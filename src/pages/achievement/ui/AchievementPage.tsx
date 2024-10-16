import { useEffect } from 'react'
import {
  fetchUserAchievements,
  getAchievements,
  getAchievementsIsLoading
} from '../../../entities/achievements'
import { AchievementsList } from '../../../features/achievements'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './AchievemenPage.module.css'
import { Loader } from '../../../shared/ui/Loader'

export const AchievementPage = ({ userId }: { userId: string }) => {
  const dispatch = useAppDispatch()
  const achievements = useAppSelector(getAchievements)
  const isLoading = useAppSelector(getAchievementsIsLoading)

  useEffect(() => {
    if (!achievements.loaded) {
      dispatch(fetchUserAchievements({ userId, skip: 0, take: 100 }))
    }
  }, [dispatch, userId, achievements.loaded])

  return (
    <AppLayout>
      <HeaderWithBackButton title="Достижения" />
      {isLoading ? (
        <Loader />
      ) : (
        <AchievementsList
          achievements={achievements.achievements}
          className={s.achivement}
        />
      )}
    </AppLayout>
  )
}
