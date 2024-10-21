import { BottomDrawer } from "../../../../shared/ui/BottomDrawer";
import s from "./AchievementsList.module.css";
import classNames from "classnames";
import { useState } from "react";
import { UserAchievementsListItem } from "../../../../shared/api/generated";
import { AppImage } from "../../../../shared/ui/AppImg/AppImage";
import { useAchievementsDetails } from "../../hooks/useAchievementsDetails";

interface IAchievementsListProps {
  className?: string;
  achievements: UserAchievementsListItem[];
  userId?: string;
}

export const AchievementsList = ({
  className,
  userId,
  achievements,
}: IAchievementsListProps) => {
  const [selectedAchievementId, setSelectedAchievementId] = useState<
    number | null
  >(null);
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const {
    achievementDetails,
    isLoadingAchievementDetails: loading,
    isErrorAchievementDetails: error,
  } = useAchievementsDetails({
    userId,
    achievementId: selectedAchievementId || undefined,
    enabled: isBottomSheetOpen && selectedAchievementId !== null,
  });

  const handleAchievementClick = (achievementId: number) => {
    setSelectedAchievementId(achievementId);
    setBottomSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setBottomSheetOpen(false);
    setSelectedAchievementId(null);
  };

  return (
    <div className={className}>
      <div>
        {isBottomSheetOpen && (
          <BottomDrawer
            isLoading={loading}
            error={error?.message}
            isOpen={isBottomSheetOpen}
            onClose={handleCloseSheet}
            title={achievementDetails?.descriptionRu}
            icon={achievementDetails?.imageUrl ?? undefined}
            btnText="Пропустить"
          />
        )}
      </div>
      <div className={s.achievementsGrid}>
        {achievements.map((achievement) => (
          <div
            onClick={() => handleAchievementClick(achievement.achievementId)}
            key={achievement.achievementId}
            className={s.achievementCard}
          >
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
            <div className={s.achievementInfo}>
              <span className={s.achievementName}>{achievement.nameRu}</span>
              <span className={s.achievementReward}>
                + {achievement.scoreForAchievement} $corncoin
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
