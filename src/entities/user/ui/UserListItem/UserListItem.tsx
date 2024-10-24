import { Link } from "react-router-dom";
import s from "./UserListItem.module.css";
import {
  UserListItem as UserListType,
  UserReferralDto,
} from "../../../../shared/api/generated";

export interface IUserListItemProps {
  user?: UserListType;
  userReferrals?: UserReferralDto;
  topUsers?: boolean;
}

export const UserListItem = ({
  user,
  userReferrals,
  topUsers = false,
}: IUserListItemProps) => {
  const avatarUrl =
    "https://s3-alpha-sig.figma.com/img/6269/cc73/d9d4686cc309a37f1a82fc6c39b8ba87?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McWF~lauPKAiKDbeUy1mFx8pQI5nEapb0CepUsHKZB98-alD0AbW57aa73gdoqkBQI96OK2Io8K75eXjCamRqLU9E5CS3wl02ayNq1KbAzivK2fLbvIcbg5NLJOta5r7qNxnXad2JhsUQo2r3PDBf4E-znqw8oH2fWxfR0u9K4WHPH0nJI7pQeA8TQ4re1BPxzeolg5uztRpG8U6eTEhbwL3vPdjGKcWkaIKTe~wAu7R3-GrwuQvBYQODvbmqeOR4-Cq8DisZoWtxifcGfBxr5r3yVHSQNnSK9FB-9MnPqIrlSG6zzAkMFZ~H-MTda68r1CqmShcQswUh0JvVc~udw__";

  if (topUsers) {
    return (
      <Link
        className={s.topUserInfoContainer}
        to={
          user
            ? `/user-profile/${user.id}`
            : userReferrals
              ? `/user-profile/${userReferrals.userId}`
              : "#"
        }
      >
        <div className={s.topUserInfoWrapper}>
          <div className={s.topUserAvatar}>
            <img src={avatarUrl} alt="Avatar" />
          </div>
          <div className={s.topUserInfo}>
            {user ? (
              <>
                <span className={s.userInfoLvlV2}>
                  LVL {user.gradeInfo.level}. {user.gradeInfo?.grade}
                </span>
                <span className={s.userInfoNickNameV2}>{user.fullName}</span>
              </>
            ) : userReferrals ? (
              <>
                <span className={s.userInfoLvl}>{userReferrals.userName}</span>
                <span className={s.userInfoNickName}>
                  {userReferrals?.scoreForReferral} $CORNCOIN
                </span>
              </>
            ) : (
              <span>Нет данных</span>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      className={s.topUserInfoContainer}
      to={
        user
          ? `/user-profile/${user.id}`
          : userReferrals
            ? `/user-profile/${userReferrals.userId}`
            : "#"
      }
    >
      <div className={s.topUserInfoWrapper}>
        <div className={s.topUserAvatar}>
          <img src={avatarUrl} alt="Avatar" />
        </div>
        <div className={s.topUserInfo}>
          {user ? (
            <>
              <span className={s.userInfoLvl}>
                LVL {user.score}. {user.gradeInfo?.grade}
              </span>
              <span className={s.userInfoNickName}>@{user.userName}</span>
            </>
          ) : userReferrals ? (
            <>
              <span className={s.userInfoLvl}>{userReferrals.userName}</span>
              <span className={s.userInfoNickName}>
                {userReferrals?.scoreForReferral} $CORNCOIN
              </span>
            </>
          ) : (
            <span>Нет данных</span>
          )}
        </div>
      </div>
    </Link>
  );
};
