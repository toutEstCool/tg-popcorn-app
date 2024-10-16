import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../../../../../shared/api/api'

export const fetchGradesLevels = createAsyncThunk(
  'grades/fetchGradesLevels',
  async (_, { rejectWithValue }) => {
    try {
      const response = await $api.post('Grades/getGradesLevels')
      return response.data.grades
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)
