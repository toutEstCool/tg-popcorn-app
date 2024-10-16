import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../../../../../shared/api/api'

export const loginWithTelegram = createAsyncThunk(
  'auth/loginWithTelegram',
  async ({ referralCode }: { referralCode?: string }, { rejectWithValue }) => {
    try {
      const telegramWindow = window as unknown as TelegramWindow
      const initData = telegramWindow.Telegram?.WebApp?.initData

      if (!initData) {
        throw new Error('Telegram initData not found')
      }

      const requestBody = { initData, referralCode }

      const response = await $api.post('Auth/signInTelegram', requestBody)
      const { accessToken, refreshToken } = response.data

      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)

      return { accessToken, refreshToken }
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)
