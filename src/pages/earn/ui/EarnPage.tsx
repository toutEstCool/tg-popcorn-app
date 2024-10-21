import { InviteFriendButton } from "../../../entities/referral";
import { ReferralsList } from "../../../entities/user";
import { useProfile } from "../../../features/user-v2/model/useProfile";
import { useReferrals } from "../../../features/user-v2/model/useReferrals";
import PrizePng from "../../../shared/assets/images/prize.png";
import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { Loader } from "../../../shared/ui/Loader";
import { ReferralProgram } from "../../../shared/ui/ReferralProgram";
import { RewardDisplay } from "../../../shared/ui/RewardDisplay";
import { UserXPBar } from "../../../shared/ui/UserXPBar";
import { AppLayout } from "../../../widgets/AppLayout";
import s from "./EarnPage.module.css";

export const EarnPage = () => {
  const { referrals, userReferralsCount, isLoading } = useReferrals({
    take: 5,
    skip: 0,
  });
  const { profile, isLoading: profileLoading } = useProfile();

  if (isLoading && profileLoading) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  }

  const totalCoints = profile?.score;

  return (
    <AppLayout>
      <HeaderWithBackButton title="Earn" />
      <div className={s.earnScroll}>
        <section className={s.earnWrapper}>
          <div className={s.earnTotalCoinWrapper}>
            <img width={90} src={PrizePng} />
            {profile && (
              <div className={s.earnTotalCoinInfo}>
                <span className={s.earnTotalCoinTitle}>всего заработано:</span>
                <span className={s.earnTotalCoinCount}>
                  <RewardDisplay
                    reward={Number(totalCoints)}
                    className={s.earnTotalCoinCount}
                  />
                  {""} $corncoin
                </span>
              </div>
            )}
          </div>
          <ReferralProgram />
          <div className={s.referralWrapper}>
            <UserXPBar
              className={s.xbBar}
              score={userReferralsCount}
              end={10}
              isProfile={false}
            />
            <div style={{ marginTop: "10px" }}>
              <ReferralsList referrals={referrals} />
            </div>
          </div>
        </section>
        <InviteFriendButton className={s.referralBtn} />
      </div>
    </AppLayout>
  );
};
