import { RootState } from '../../../../../app/providers/store/ui/MainStore'

export const getUserReferralsData = (state: RootState) =>
  state.userReferrals.referrals
export const getUserReferralsIsLoading = (state: RootState) =>
  state.userReferrals.isLoading
export const getUserReferralsError = (state: RootState) =>
  state.userReferrals.error
