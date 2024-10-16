import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  ReferralCodeResponse,
  ReferralStateSchema
} from '../types/ReferralSchema'
import { generateReferralCode } from '../services/generateReferralCode/generateReferralCode'

const initialState: ReferralStateSchema = {
  referralCode: '',
  isLoading: false,
  error: '',
  isGenerated: false
}

const referralSlice = createSlice({
  name: 'referral',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateReferralCode.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.isGenerated = false
      })
      .addCase(
        generateReferralCode.fulfilled,
        (state, action: PayloadAction<ReferralCodeResponse>) => {
          state.isLoading = false
          state.referralCode = action.payload.referralCode
          state.isGenerated = true
        }
      )
      .addCase(generateReferralCode.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
        state.isGenerated = false
      })
  }
})

export const { actions: referralActions } = referralSlice
export const { reducer: referralReducer } = referralSlice
