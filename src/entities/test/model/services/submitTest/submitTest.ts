import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../../../../../shared/api/api'

interface SubmitTestParams {
  testId: number
  answers: {
    testQuestionNumber: number
    selectedCasesNumbers: number[]
  }[]
}

export const submitTest = createAsyncThunk(
  'test/submitTest',
  async (params: SubmitTestParams, { rejectWithValue }) => {
    try {
      const response = await $api.post('Tests/submitTest', params)
      return response.data
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Ошибка при отправке данных теста'
      )
    }
  }
)
