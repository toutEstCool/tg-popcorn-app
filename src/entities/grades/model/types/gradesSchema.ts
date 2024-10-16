export interface GradeLevel {
  level: number
  scoreFromInclusive: number
  scoreToExclusive: number
  grade: string
}

export interface GradesState {
  grades: GradeLevel[]
  isLoading: boolean
  error: string | null
}
