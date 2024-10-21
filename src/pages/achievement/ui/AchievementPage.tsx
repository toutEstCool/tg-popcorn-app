import { AchievementsList } from "../../../features/achievements";
import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { AppLayout } from "../../../widgets/AppLayout";
import s from "./AchievemenPage.module.css";
import { Loader } from "../../../shared/ui/Loader";
import { useAchievementsList } from "../../../features/achievements/hooks/useAchievementsList";
import { useProfile } from "../../../features/user-v2/model/useProfile";

export const AchievementPage = () => {
  const { profile } = useProfile();
  const userId = profile?.id;

  const { achievementsList, isLoadingAchievementsList } = useAchievementsList({
    userId,
    take: 100,
    skip: 0,
  });

  if (isLoadingAchievementsList) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <AppLayout>
      <HeaderWithBackButton title="Достижения" />
      <div className={s.achievementsScrollWrapper}>
        {achievementsList && (
          <AchievementsList
            userId={String(userId)}
            achievements={achievementsList}
            className={s.achivement}
          />
        )}
      </div>
    </AppLayout>
  );
};
