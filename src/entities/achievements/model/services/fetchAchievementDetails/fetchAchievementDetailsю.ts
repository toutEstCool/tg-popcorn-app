import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../../../../../shared/api/api'
import { AchievementDetails } from '../../types/achievementsSchema'

export const fetchAchievementDetails = createAsyncThunk(
  'achievements/fetchAchievementDetails',
  async (
    { userId, achievementId }: { userId: string; achievementId: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await $api.post('Achievements/getUserAchievementInfo', {
        userId,
        achievementId
      })
      return response.data as AchievementDetails
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)
