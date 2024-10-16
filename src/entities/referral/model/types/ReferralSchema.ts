export interface ReferralStateSchema {
  referralCode: string
  isLoading: boolean
  error: string | null
  isGenerated: boolean
}

export interface ReferralCodeRequest {
  userId: string
}

export interface ReferralCodeResponse {
  referralCode: string
}
