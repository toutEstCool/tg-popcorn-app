import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchGradesLevels } from '../selectors/fetchGradesLevels/fetchGradesLevels'
import { GradeLevel, GradesState } from '../types/gradesSchema'

const initialState: GradesState = {
  grades: [],
  isLoading: false,
  error: null
}

const gradesSlice = createSlice({
  name: 'grades',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGradesLevels.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(
        fetchGradesLevels.fulfilled,
        (state, action: PayloadAction<GradeLevel[]>) => {
          state.isLoading = false
          state.grades = action.payload
        }
      )
      .addCase(fetchGradesLevels.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  }
})

export const { actions: gradesActions } = gradesSlice
export const { reducer: gradesReducer } = gradesSlice
