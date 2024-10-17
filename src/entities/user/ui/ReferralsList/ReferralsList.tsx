import { UserListItem } from '../UserListItem/UserListItem'
import s from './ReferralsList.module.css'

interface Referral {
  userId: string
  fullName: string
  userName: string
}

interface IReferralsListProps {
  referrals: Referral[]
}

export const ReferralsList = ({ referrals }: IReferralsListProps) => {
  return (
    <div className={s.referralsList}>
      {referrals?.map((referral: Referral) => (
        <UserListItem key={referral?.userId} userReferrals={referral} />
      ))}
    </div>
  )
}
