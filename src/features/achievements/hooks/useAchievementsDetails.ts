import { useGetAchievementsDetailsQuery } from "../../../entities/achievements-v2/queries";
import { GetUserAchievementInfoQuery } from "../../../shared/api/generated";

interface UseAchievementsDetailsProps extends GetUserAchievementInfoQuery {
  enabled?: boolean;
}

export const useAchievementsDetails = ({
  userId,
  achievementId,
  enabled,
}: UseAchievementsDetailsProps) => {
  const {
    data: achievementDetails,
    isLoading: isLoadingAchievementDetails,
    error: isErrorAchievementDetails,
  } = useGetAchievementsDetailsQuery({ userId, achievementId }, { enabled });

  return {
    achievementDetails,
    isLoadingAchievementDetails,
    isErrorAchievementDetails,
  };
};
