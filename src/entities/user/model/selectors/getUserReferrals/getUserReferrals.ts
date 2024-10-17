import { RootState } from '../../../../../app/providers/store/ui/MainStore'

export const getUserReferralsData = (state: RootState) =>
  state.userReferrals.items
export const getUserReferralsIsLoading = (state: RootState) =>
  state.userReferrals.isLoading
export const getUserReferralsError = (state: RootState) =>
  state.userReferrals.error
export const getUserReferralsCount = (state: RootState) =>
  state.userReferrals.totalCount
