import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  GetUserAchievementInfoQuery,
  GetUserAchievementInfoResponse,
  GetUserAchievementsListQuery,
  GetUserAchievementsListResponse,
  postApiAchievementsGetUserAchievementInfo,
  postApiAchievementsGetUserAchievementsList,
} from "../../shared/api/generated";

const userAchievementsKey = ["achievements-list"] as unknown[];
const userAchievementsDetailsKey = ["achievements-details"] as unknown[];

export function useGetAchievementsQuery(
  { userId, skip, take }: GetUserAchievementsListQuery,
  options?: UseQueryOptions<GetUserAchievementsListResponse, Error>,
) {
  return useQuery({
    queryKey: userAchievementsKey.concat([{ userId, skip, take }]),
    queryFn: () =>
      postApiAchievementsGetUserAchievementsList({ userId, skip, take }),
    enabled: !!userId,
    ...options,
  });
}

export function useGetAchievementsDetailsQuery(
  { userId, achievementId }: GetUserAchievementInfoQuery,
  options?: Omit<
    UseQueryOptions<GetUserAchievementInfoResponse, Error>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery<GetUserAchievementInfoResponse, Error>({
    queryKey: userAchievementsDetailsKey.concat([{ userId, achievementId }]),
    queryFn: () =>
      postApiAchievementsGetUserAchievementInfo({ userId, achievementId }),
    enabled: !!userId && !!achievementId,
    ...options,
  });
}
