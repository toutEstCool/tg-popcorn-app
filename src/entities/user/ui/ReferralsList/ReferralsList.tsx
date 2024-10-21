import { UserReferralDto } from "../../../../shared/api/generated";
import { UserListItem } from "../UserListItem/UserListItem";
import s from "./ReferralsList.module.css";

interface IReferralsListProps {
  referrals: UserReferralDto[];
}

export const ReferralsList = ({ referrals }: IReferralsListProps) => {
  return (
    <div className={s.referralsList}>
      {referrals?.map((referral: UserReferralDto) => (
        <UserListItem key={referral?.userId} userReferrals={referral} />
      ))}
    </div>
  );
};
