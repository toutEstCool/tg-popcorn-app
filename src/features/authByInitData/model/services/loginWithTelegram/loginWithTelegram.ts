import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../../../../../shared/api/api'

export const loginWithTelegram = createAsyncThunk(
  'auth/loginWithTelegram',
  async ({ referralCode }: { referralCode?: string }, { rejectWithValue }) => {
    try {
      const telegramWindow = window as unknown as TelegramWindow

      // const initData = telegramWindow.Telegram?.WebApp?.initData

      const initData =
        'query_id=AAGiJElIAAAAAKIkSUi2lI1y&user=%7B%22id%22%3A1212753058%2C%22first_name%22%3A%22Apollo%20%F0%9F%A6%88%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22Apollo0%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1729060877&hash=b17d342d79ca23df15da8240b5ed8d0433a8416c8fd14c758b2c1d914448defd'

      if (!initData) {
        throw new Error('Telegram initData not found')
      }

      const params = new URLSearchParams(initData)
      const userDataString = params.get('user')
      if (!userDataString) {
        throw new Error('User data not found in initData')
      }

      const userData = JSON.parse(userDataString) as {
        id: number
        first_name: string
        last_name?: string
        username?: string
        language_code?: string
        photo_url?: string
      }

      const requestBody: { initData: string; referralCode?: string } = {
        initData
      }
      if (referralCode && referralCode.trim() !== '') {
        requestBody.referralCode = referralCode
      }

      const response = await $api.post('Auth/signInTelegram', requestBody)
      const { accessToken, refreshToken } = response.data

      if (!accessToken || !refreshToken) {
        throw new Error('Tokens are not received from server')
      }

      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)

      return {
        accessToken,
        refreshToken,
        photoUrl: userData.photo_url || null
      }
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)
