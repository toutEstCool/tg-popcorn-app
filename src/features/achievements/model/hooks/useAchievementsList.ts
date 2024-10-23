import { useGetAchievementsQuery } from "../../../../entities/achievements/queries";
import { GetUserAchievementsListQuery } from "../../../../shared/api/generated";

export const useAchievementsList = ({
  userId,
  skip = 0,
  take = 10,
}: GetUserAchievementsListQuery) => {
  const {
    data: achievementsListInit,
    isLoading: isLoadingAchievementsList,
    error: isErrorAchievementsList,
  } = useGetAchievementsQuery({ userId, skip, take });

  const achievementsList = achievementsListInit?.items || [];
  const totalAchievementsCount = achievementsListInit?.totalCount;

  return {
    achievementsList,
    totalAchievementsCount,
    isLoadingAchievementsList,
    isErrorAchievementsList,
  };
};
