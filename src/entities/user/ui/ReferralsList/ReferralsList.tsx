import { UserListItem } from '../UserListItem/UserListItem'
import { useFetchUserReferrals } from '../../hooks/useFetchUserReferrals/useFetchUserReferrals'
import { useAppSelector } from '../../../../shared/hooks/useAppSelector'
import { getCurrentUser } from '../../model/selectors/getCurrentUser/getCurrentUser'
import s from './ReferralsList.module.css'
import { Loader } from '../../../../shared/ui/Loader'

export const ReferralsList = () => {
  const currentUser = useAppSelector(getCurrentUser)
  const { referrals, isLoading, error } = useFetchUserReferrals(currentUser?.id)

  if (isLoading) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return <div className={s.error}>Ошибка: {error}</div>
  }

  if (!referrals || referrals.length === 0) {
    return <h4 className={s.noReferrals}>Рефералы не найдены</h4>
  }

  return (
    <div className={s.referralsList}>
      {(Array.isArray(referrals) ? referrals : []).map((referral) => (
        <UserListItem key={referral?.userId} userReferrals={referral} />
      ))}
    </div>
  )
}
