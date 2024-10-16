import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../../../../../shared/api/api'
import {
  ReferralCodeRequest,
  ReferralCodeResponse
} from '../../types/ReferralSchema'

export const generateReferralCode = createAsyncThunk(
  'user/generateReferralCode',
  async ({ userId }: ReferralCodeRequest, { rejectWithValue }) => {
    try {
      const response = await $api.post<ReferralCodeResponse>(
        'Users/generateAndGetReferralCode',
        { userId }
      )
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)
