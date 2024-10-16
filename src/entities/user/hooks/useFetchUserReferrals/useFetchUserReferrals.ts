import { useEffect } from 'react'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../../shared/hooks/useAppSelector'
import {
  getUserReferralsData,
  getUserReferralsError,
  getUserReferralsIsLoading
} from '../../model/selectors/getUserReferrals/getUserReferrals'
import { fetchUserReferrals } from '../../model/services/fetchUsersReferrals/fetchUserReferrals'

export const useFetchUserReferrals = (
  userId: string | undefined,
  skip = 0,
  take = 10
) => {
  const dispatch = useAppDispatch()
  const referrals = useAppSelector(getUserReferralsData)
  const isLoading = useAppSelector(getUserReferralsIsLoading)
  const error = useAppSelector(getUserReferralsError)

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserReferrals({ userId, skip, take }))
    }
  }, [dispatch, userId, skip, take])

  return { referrals, isLoading, error }
}
