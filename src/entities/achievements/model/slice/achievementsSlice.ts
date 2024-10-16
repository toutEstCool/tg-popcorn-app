import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUserAchievements } from '../services/fetchUserAchievements/fetchUserAchievements'
import { Achievement, AchievementsState } from '../types/achievementsSchema'

const initialState: AchievementsState = {
  achievements: [],
  totalCount: 0,
  isLoading: false,
  error: null
}

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAchievements.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(
        fetchUserAchievements.fulfilled,
        (
          state,
          action: PayloadAction<{ items: Achievement[]; totalCount: number }>
        ) => {
          state.isLoading = false
          state.achievements = action.payload.items
          state.totalCount = action.payload.totalCount
        }
      )
      .addCase(fetchUserAchievements.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  }
})

export const { actions: achievementsActions } = achievementsSlice
export const { reducer: achievementsReducer } = achievementsSlice
