import { Link } from "react-router-dom";
import { UserCard } from "../../../entities/userCard";
import { AchievementsOverview } from "../../../features/achievements";
import { ReferralProgram } from "../../../shared/ui/ReferralProgram";
import { AppLayout } from "../../../widgets/AppLayout";
import s from "./ProfilePage.module.css";
import { Loader } from "../../../shared/ui/Loader";
import { useAchievementsList } from "../../../features/achievements/model/hooks/useAchievementsList";
import { useProfile } from "../../../features/user/model/hooks/useProfile";

export const ProfilePage = () => {
  const { profile, isLoading } = useProfile();

  const { achievementsList, isLoadingAchievementsList } = useAchievementsList({
    userId: profile?.id,
    take: 4,
    skip: 0,
  });

  if (isLoading) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <AppLayout>
      <div className={s.profilePageContainer}>
        {profile && (
          <>
            <UserCard profile={profile} isOwnProfile={true} />
            <AchievementsOverview
              isOwnProfile={true}
              isLoadingAchievementsList={isLoadingAchievementsList}
              achievementsList={achievementsList}
            />
            <Link to="/earn" className={s.earnLink}>
              <ReferralProgram />
            </Link>
          </>
        )}
      </div>
    </AppLayout>
  );
};
