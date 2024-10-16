export interface Referral {
  userId: string
  fullName: string
  userName: string
}

export interface UserReferralsState {
  items: Referral[]
  isLoading: boolean
  error: string | null
  totalCount: number
}
