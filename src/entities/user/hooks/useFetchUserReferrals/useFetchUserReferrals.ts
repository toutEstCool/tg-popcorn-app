import { useEffect } from 'react'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../../shared/hooks/useAppSelector'
import {
  getUserReferralsCount,
  getUserReferralsData,
  getUserReferralsError,
  getUserReferralsIsLoading
} from '../../model/selectors/getUserReferrals/getUserReferrals'
import { fetchUserReferrals } from '../../model/services/fetchUsersReferrals/fetchUserReferrals'

interface Referral {
  userId: string
  fullName: string
  userName: string
}

interface ReferralsResponse {
  items: Referral[]
}

export const useFetchUserReferrals = (
  userId: string | undefined,
  skip = 0,
  take = 10
) => {
  const dispatch = useAppDispatch()

  const referrals: ReferralsResponse | null | any =
    useAppSelector(getUserReferralsData)
  const isLoading: boolean = useAppSelector(getUserReferralsIsLoading)
  const error: string | null = useAppSelector(getUserReferralsError)
  const referralsTotalCount = useAppSelector(getUserReferralsCount)

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserReferrals({ userId, skip, take }))
    }
  }, [dispatch, userId, skip, take])

  return { referrals, isLoading, error, referralsTotalCount }
}
