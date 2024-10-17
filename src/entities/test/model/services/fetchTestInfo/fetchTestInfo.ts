import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../../../../../shared/api/api'

interface Question {
  question: string
  imageList: string[]
}

interface TestInfo {
  testId: number
  title: string
  description: string
  questions: Question[]
}

export const fetchTestInfo = createAsyncThunk<TestInfo, number>(
  'test/fetchTestInfo',
  async (testId, { rejectWithValue }) => {
    try {
      const response = await $api.post('Tests/getTestInfo', {
        testId
      })
      return response.data
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ||
          'Ошибка при загрузке информации о тесте'
      )
    }
  }
)
