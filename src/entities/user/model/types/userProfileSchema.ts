export interface UserProfileSchema {
  id: string
  accountName: string
  fullName: string
  score: number
  gradeInfo?: {
    grade: string
    level: number
    progressPercents: number
    scoreFromInclusive: number
    scoreToExclusive: number
  }
}

export interface UserStateSchema {
  currentUser: {
    id: string
    name: string
    roles: string[]
  } | null
  userProfile: UserProfileSchema | null
  isLoading: boolean
  error: string | null
  isFetched: boolean
}

export interface User {
  id: string
  fullName: string
  userName: string
  score: number
}

export interface UsersState {
  users: User[]
  totalCount: number
  isLoading: boolean
  error: string | null
  isFetched: boolean
}
