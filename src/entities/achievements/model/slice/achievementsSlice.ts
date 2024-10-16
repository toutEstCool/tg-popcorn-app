import { createSlice } from '@reduxjs/toolkit'
import { fetchUserAchievements } from '../services/fetchUserAchievements/fetchUserAchievements'
import { AchievementsState } from '../types/achievementsSchema'

const initialState: AchievementsState = {
  overviewAchievements: [],
  allAchievements: [],
  overviewLoaded: false,
  allLoaded: false,
  overviewLoading: false,
  allLoading: false,
  error: null
}

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAchievements.pending, (state, action) => {
        if (action.meta.arg.take === 4) {
          state.overviewLoading = true
          state.overviewLoaded = false
        } else {
          state.allLoading = true
          state.allLoaded = false
        }
        state.error = null
      })
      .addCase(fetchUserAchievements.fulfilled, (state, action) => {
        const { items } = action.payload
        if (action.meta.arg.take === 4) {
          state.overviewLoading = false
          state.overviewLoaded = true
          state.overviewAchievements = items
        } else {
          state.allLoading = false
          state.allLoaded = true
          state.allAchievements = items
        }
      })
      .addCase(fetchUserAchievements.rejected, (state, action) => {
        if (action.meta.arg.take === 4) {
          state.overviewLoading = false
        } else {
          state.allLoading = false
        }
        state.error = action.payload as string
      })
  }
})

export const { actions: achievementsActions } = achievementsSlice
export const { reducer: achievementsReducer } = achievementsSlice
