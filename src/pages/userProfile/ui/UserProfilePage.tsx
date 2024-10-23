import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { AppLayout } from "../../../widgets/AppLayout";
import s from "./UserProfilePage.module.css";

import { useParams } from "react-router-dom";

import { Loader } from "../../../shared/ui/Loader";
import { UserCard } from "../../../entities/userCard";
import { AchievementsList } from "../../../features/achievements";
import { useAchievementsList } from "../../../features/achievements/model/hooks/useAchievementsList";
import { useProfile } from "../../../features/user/model/hooks/useProfile";

export const UserProfilePage = () => {
  const { userId } = useParams<{ userId: string }>();
  const { profile, isLoading } = useProfile(userId);
  const { achievementsList, isLoadingAchievementsList } = useAchievementsList({
    userId,
    take: 100,
    skip: 0,
  });

  if (isLoading || isLoadingAchievementsList) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <AppLayout>
      <HeaderWithBackButton title={""} />
      <div className={s.profilePageContainer}>
        {profile && (
          <>
            <UserCard profile={profile} isOwnProfile={false} />
            <AchievementsList
              className={s.achievementsContainer}
              achievements={achievementsList}
              userId={profile?.id}
            />
          </>
        )}
      </div>
    </AppLayout>
  );
};
