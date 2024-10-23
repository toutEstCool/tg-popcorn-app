import { memo } from "react";
import s from "./UserReferralBar.module.css";
import classNames from "classnames";

interface IUserReferralBarProps {
  className?: string;
  referrals?: Array<{
    userId: string;
    fullName: string;
    userName: string;
    scoreForReferral: number;
  }>;
  totalCount: number;
  isProfile?: boolean;
}
export const UserReferralBar = memo(
  ({
    className,
    referrals = [],
    totalCount = 10,
    isProfile = false,
  }: IUserReferralBarProps) => {
    const referralCount = referrals.length;

    const progressWidth = (referralCount / totalCount) * 100;

    return (
      <div className={classNames(s.UserXPBarWrapper, className)}>
        <span className={s.userLvl}>
          {isProfile ? <>LVL {referralCount}. Приглашений</> : "Приглашений:"}
        </span>
        <div className={s.progressSection}>
          <div className={s.progressCountSection}>
            <span>{referralCount}</span>
            <span>{totalCount}</span>
          </div>
        </div>
        <div
          style={{
            background: "#FFFFFF1C",
            height: "9px",
            borderRadius: "28px",
          }}
        >
          <div
            style={{
              height: "9px",
              background: "#DBB157",
              width: `${progressWidth}%`,
              borderRadius: "28px",
            }}
          ></div>
        </div>
      </div>
    );
  },
);
