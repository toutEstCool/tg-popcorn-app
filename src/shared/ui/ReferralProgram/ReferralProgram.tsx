import s from "./ReferralProgram.module.css";
import ReferralPng from "../../../shared/assets/images/referral.png";
import { AppImage } from "../AppImg/AppImage";

export const ReferralProgram = () => {
  return (
    <div className={s.referralProgramContainer}>
      <div className={s.contentWrapper}>
        <h3 className={s.title}>Реферальная программа</h3>
        <p className={s.subtitle}>Приглашай друзей - зарабатывай $CORNCOIN</p>
      </div>
      <div className={s.iconWrapper}>
        <AppImage
          className={s.referralIcon}
          src={ReferralPng}
          alt="Referral Icon"
        />
      </div>
    </div>
  );
};
