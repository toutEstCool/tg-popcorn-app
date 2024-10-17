import { createSlice } from '@reduxjs/toolkit'
import { fetchTestsList } from '../services/fetchTestsList/fetchTestsList'

interface Test {
  testId: string
  title: string
  description: string
  scoreForAttempt: number
  previewImageUrl: string
  lectureId: number
  alreadyParticipated: boolean
}

interface TestsState {
  items: Test[]
  isLoading: boolean
  error: string | null
}

const initialState: TestsState = {
  items: [],
  isLoading: false,
  error: null
}

const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestsList.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchTestsList.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload
      })
      .addCase(fetchTestsList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  }
})

export const { reducer: testActions } = testsSlice
export const { reducer: testReducer } = testsSlice
