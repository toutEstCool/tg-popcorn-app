import { InviteFriendButton } from '../../../entities/referral'
import {
  getCurrentUser,
  getUserProfile,
  ReferralsList,
  useFetchUserReferrals
} from '../../../entities/user'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'

import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { Loader } from '../../../shared/ui/Loader'
import { ReferralProgram } from '../../../shared/ui/ReferralProgram'
import { UserXPBar } from '../../../shared/ui/UserXPBar'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './EarnPage.module.css'

export const EarnPage = () => {
  const currentUser = useAppSelector(getCurrentUser)
  const userProfile = useAppSelector(getUserProfile)
  const { referrals, isLoading, referralsTotalCount } = useFetchUserReferrals(
    currentUser?.id
  )

  if (isLoading) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    )
  }

  return (
    <AppLayout>
      <HeaderWithBackButton title="Earn" />
      <div className={s.earnScroll}>
        <section className={s.earnWrapper}>
          <div className={s.earnTotalCoinWrapper}>
            <img
              width={90}
              src="https://s3-alpha-sig.figma.com/img/ed9d/543b/9e68eee8899ae6c5dd49780565cee42b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gC7Oqsl0AdLcJuIv3vesdbQCdz~vpJCzb~~0Jwz5MPJ8MIduHs0x19ZF91EcyMBZD5FuoSjsS9pf1OSV9Sn~fONpx5yCsZbB34Mb~zrFKlVi8MR0M3jVrK0-O7RCJDXVRb--FBgJanHKptvdl6CjZE5Yclt3sduLhedaa8Ws979xuJ5aTX7OWy0FbfGmKb7UNvfcHXZ634AbFTiQBVHGTGd-N5a4dj87HI9utWDkMut51kI-SZGsMp-KkkbndH8Z7vsFoHC3A3lclDu~4d3sQGDWKHnmwDCfCJdMwvUD8m8344hNDSTT14fl~NHeUvegPRIWNjRbA-ZqAStNU456kw__"
            />
            <div className={s.earnTotalCoinInfo}>
              <span className={s.earnTotalCoinTitle}>всего заработано</span>
              <span className={s.earnTotalCoinCount}>
                {userProfile?.score} corncoin
              </span>
            </div>
          </div>
          <ReferralProgram />
          <div className={s.referralWrapper}>
            <UserXPBar
              className={s.xbBar}
              score={referralsTotalCount}
              end={10}
            />
            <ReferralsList referrals={referrals} />
          </div>
        </section>
        <InviteFriendButton className={s.referralBtn} />
      </div>
    </AppLayout>
  )
}
