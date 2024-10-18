import { useEffect } from 'react'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { fetchAchievementDetails } from '../../../entities/achievements/model/services/fetchAchievementDetails/fetchAchievementDetailsю'

export const useAchievementDetails = (
  userId: string,
  achievementId: number
) => {
  const dispatch = useAppDispatch()
  const achievementDetails = useAppSelector(
    (state) => state.achievements.selectedAchievement
  )
  const loading = useAppSelector((state) => state.achievements.selectedLoading)
  const error = useAppSelector((state) => state.achievements.error)

  useEffect(() => {
    if (achievementId) {
      dispatch(fetchAchievementDetails({ userId, achievementId }))
    }
  }, [userId, achievementId, dispatch])

  return {
    achievementDetails,
    loading,
    error
  }
}
