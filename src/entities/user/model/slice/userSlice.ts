import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchCurrentUser } from '../services/fetchCurrentUser/fetchCurrentUser'
import { fetchUserProfile } from '../services/fetchUserProfile/fetchUserProfile'
import { UserProfileSchema, UserStateSchema } from '../types/userProfileSchema'

const initialState: UserStateSchema = {
  currentUser: null,
  userProfile: null,
  isLoading: false,
  error: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(
        fetchCurrentUser.fulfilled,
        (state, action: PayloadAction<UserStateSchema['currentUser']>) => {
          state.isLoading = false
          state.currentUser = action.payload
        }
      )
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(
        fetchUserProfile.fulfilled,
        (state, action: PayloadAction<UserProfileSchema>) => {
          state.isLoading = false
          state.userProfile = action.payload
        }
      )
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
