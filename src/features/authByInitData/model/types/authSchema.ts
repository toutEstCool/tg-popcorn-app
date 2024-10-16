export interface AuthSchema {
  accessToken: string | null
  refreshToken: string | null
  photoUrl: string | null
  isLoading: boolean
  error?: string
  isAuthenticated: boolean
}
