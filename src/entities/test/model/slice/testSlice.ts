import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchTestInfo } from '../services/fetchTestInfo/fetchTestInfo'
import { Question } from '../types/testSchema'

interface TestState {
  testId: number | null
  lectureId: number | null
  title: string
  description: string
  scoreForAttempt: number | null
  previewImageUrl: string
  alreadyParticipated: boolean
  questions: Question[]
  isLoading: boolean
  error: string | null
}

const initialState: TestState = {
  testId: null,
  lectureId: null,
  title: '',
  description: '',
  scoreForAttempt: null,
  previewImageUrl: '',
  alreadyParticipated: false,
  questions: [],
  isLoading: false,
  error: null
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestInfo.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchTestInfo.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.testId = action.payload.testId
        state.lectureId = action.payload.lectureId
        state.title = action.payload.title
        state.description = action.payload.description
        state.scoreForAttempt = action.payload.scoreForAttempt
        state.previewImageUrl = action.payload.previewImageUrl
        state.alreadyParticipated = action.payload.alreadyParticipated
        state.questions = action.payload.questions
      })
      .addCase(fetchTestInfo.rejected, (state, action) => {
        state.isLoading = false
        state.error =
          action.payload && typeof action.payload === 'string'
            ? action.payload
            : action.error.message || 'Ошибка при загрузке данных теста'
      })
  }
})

export const { reducer: testActions } = testSlice
export const { reducer: testReducer } = testSlice
