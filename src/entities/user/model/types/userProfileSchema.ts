export interface UserProfileSchema {
  id: string
  accountName: string
  fullName: string
  score: number
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
}
