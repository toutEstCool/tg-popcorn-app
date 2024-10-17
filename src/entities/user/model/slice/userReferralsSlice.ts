import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUserReferrals } from '../services/fetchUsersReferrals/fetchUserReferrals'
import { Referral, UserReferralsState } from '../types/userReferralsSchema'

const initialState: UserReferralsState = {
  items: [],
  isLoading: false,
  error: null,
  totalCount: 0
}

const userReferralsSlice = createSlice({
  name: 'userReferrals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserReferrals.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(
        fetchUserReferrals.fulfilled,
        (
          state,
          action: PayloadAction<{ items: Referral[]; totalCount: number }>
        ) => {
          state.isLoading = false
          state.items = action.payload.items
          state.totalCount = action.payload.totalCount
        }
      )
      .addCase(fetchUserReferrals.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  }
})

export const { actions: userReferralsActions } = userReferralsSlice
export const { reducer: userReferralsReducer } = userReferralsSlice
