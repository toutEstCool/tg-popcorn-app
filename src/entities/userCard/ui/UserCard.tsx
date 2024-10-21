import { memo } from "react";
import { UiUserCard } from "../../../shared/ui/UserCard";
import s from "./UserCard.module.css";
import { UserAvatar } from "../../../shared/ui/UserAvatar";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { UserXPBar } from "../../../shared/ui/UserXPBar";
import { GetUserProfileResponse } from "../../../shared/api/generated";

interface IUserCardProps {
  profile: GetUserProfileResponse;
  isOwnProfile?: boolean;
  photoUrl?: string;
}

export const UserCard = memo(
  ({ profile, isOwnProfile, photoUrl }: IUserCardProps) => {
    const avatarUrl =
      photoUrl ||
      "https://i.pinimg.com/736x/8d/12/26/8d1226b85884733d510d1292fe9fc014.jpg";
    const userNick = profile.accountName ? `${profile.accountName}` : "";

    return (
      <UiUserCard>
        <div className={s.UserCardWrapper}>
          <UserAvatar size={90} src={avatarUrl} />
          <div className={s.userInfoBlockWrapper}>
            <div className={s.userNameWrapper}>
              {!isOwnProfile && (
                <span className={s.userPopcorn}>popcorn base</span>
              )}
              <h3 className={s.userName}>{profile.fullName}</h3>
              {userNick && <span className={s.userNick}>{userNick}</span>}
            </div>
            {isOwnProfile && (
              <Link
                to={"/settings"}
                aria-label="Настройки пользователя"
                className={s.settingsLink}
              >
                <Settings color="#7C7C7C" className={s.icon} />
              </Link>
            )}
          </div>
        </div>
        <UserXPBar
          className={s.xbBar}
          score={profile.score}
          gradeInfo={profile.gradeInfo}
        />
      </UiUserCard>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.profile.id === nextProps.profile.id &&
      prevProps.profile.fullName === nextProps.profile.fullName &&
      prevProps.profile.accountName === nextProps.profile.accountName &&
      prevProps.profile.score === nextProps.profile.score &&
      JSON.stringify(prevProps.profile.gradeInfo) ===
        JSON.stringify(nextProps.profile.gradeInfo) &&
      prevProps.isOwnProfile === nextProps.isOwnProfile &&
      prevProps.photoUrl === nextProps.photoUrl
    );
  },
);
