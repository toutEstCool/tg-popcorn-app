import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../../../../../shared/api/api'
import { FetchTestsParams } from '../../types/testSchema'

export const fetchTestsList = createAsyncThunk(
  'tests/fetchTestsList',
  async ({ skip, take }: FetchTestsParams, { rejectWithValue }) => {
    try {
      const response = await $api.post('Tests/getTestsList', { skip, take })
      return response.data.items
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)
