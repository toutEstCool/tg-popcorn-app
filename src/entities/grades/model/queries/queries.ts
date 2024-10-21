import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  GetGradesLevelsResponse,
  postApiGradesGetGradesLevels,
} from "../../../../shared/api/generated";

const userLevelsKey = ["grades"] as unknown[];

export function useGetGradesQuery(
  options?: Omit<
    UseQueryOptions<GetGradesLevelsResponse, Error>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery<GetGradesLevelsResponse, Error>({
    queryKey: userLevelsKey,
    queryFn: () => postApiGradesGetGradesLevels(),
    ...options,
  });
}
