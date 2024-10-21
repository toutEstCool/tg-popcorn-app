import s from "./AchievementsOverview.module.css";
import classNames from "classnames";
import { UserAchievementsListItem } from "../../../../shared/api/generated";
import { Loader } from "../../../../shared/ui/Loader";
import { AppImage } from "../../../../shared/ui/AppImg/AppImage";
import { memo } from "react";
import { AchievementsHeader } from "../../../../shared/ui/AchievementsHeader";

interface IAchievementProps {
  className?: string;
  isOwnProfile?: boolean;
  isLoadingAchievementsList: boolean;
  achievementsList: UserAchievementsListItem[];
}

export const AchievementsOverview = memo(
  ({
    className,
    isOwnProfile = false,
    isLoadingAchievementsList,
    achievementsList,
  }: IAchievementProps) => {
    if (isLoadingAchievementsList) {
      return (
        <div className={s.loader}>
          <Loader />
        </div>
      );
    }

    return (
      <div className={classNames(s.achievementsOverviewContainer, className)}>
        {isOwnProfile && <AchievementsHeader />}
        <div className={s.achievementsList}>
          {achievementsList?.map((achievement: UserAchievementsListItem) => (
            <div key={achievement.achievementId} className={s.achievementItem}>
              <AppImage
                className={classNames(
                  s.achievementIcon,
                  !achievement.achieved && s.notAchieved,
                )}
                src={achievement.imageUrl ?? undefined}
                alt={achievement.nameEn ?? undefined}
                width={94}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
);
