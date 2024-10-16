import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserProfile } from '../../api/getUserProfile/getUserProfile'

export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (userId: string, { rejectWithValue }) => {
    try {
      return await getUserProfile(userId)
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)
