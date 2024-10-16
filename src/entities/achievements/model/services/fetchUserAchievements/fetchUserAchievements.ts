import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../../../../../shared/api/api'

export const fetchUserAchievements = createAsyncThunk(
  'achievements/fetchUserAchievements',
  async (
    { userId, skip, take }: { userId: string; skip: number; take: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await $api.post('Achievements/getUserAchievementsList', {
        userId,
        skip,
        take
      })
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)
