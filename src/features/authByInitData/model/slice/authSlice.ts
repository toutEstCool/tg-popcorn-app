import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthSchema } from '../types/authSchema'
import { loginWithTelegram } from '../services/loginWithTelegram/loginWithTelegram'

const initialState: AuthSchema = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.accessToken = null
      state.refreshToken = null
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWithTelegram.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginWithTelegram.fulfilled, (state, action) => {
        state.isLoading = false
        state.isAuthenticated = true
        state.accessToken = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
      })
      .addCase(loginWithTelegram.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  }
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice
