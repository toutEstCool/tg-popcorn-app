import { createSlice } from '@reduxjs/toolkit'
import { fetchUsersList } from '../services/fetchUsersList/fetchUsersList'
import { UsersState } from '../types/userProfileSchema'

const initialState: UsersState = {
  users: [],
  totalCount: 0,
  isLoading: false,
  error: null,
  isFetched: false
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUsersState: (state) => {
      state.isFetched = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersList.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchUsersList.fulfilled, (state, action) => {
        state.isLoading = false
        state.users = action.payload.items
        state.totalCount = action.payload.totalCount
        state.isFetched = true
      })
      .addCase(fetchUsersList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  }
})

export const { reducer: usersReducer } = usersSlice
export const { resetUsersState } = usersSlice.actions
