import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  GetTestInfoQuery,
  GetTestInfoResponse,
  GetTestsListQuery,
  GetTestsListResponse,
  postApiTestsGetTestInfo,
  postApiTestsGetTestsList,
} from "../../shared/api/generated";

const testsListKey = ["tests-list"] as unknown[];
const testInfoKey = ["tests-info"] as unknown[];

export function useGetTestsListQuery(
  { skip, take }: GetTestsListQuery,
  options?: Omit<
    UseQueryOptions<GetTestsListResponse, Error>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery<GetTestsListResponse, Error>({
    queryKey: testsListKey,
    queryFn: () => postApiTestsGetTestsList({ skip, take }),
    ...options,
  });
}

export function useGetTestInfoQuery(
  { testId }: GetTestInfoQuery,
  options?: Omit<
    UseQueryOptions<GetTestInfoResponse, Error>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery<GetTestInfoResponse, Error>({
    queryKey: testInfoKey.concat(testId),
    queryFn: () => postApiTestsGetTestInfo({ testId }),
    enabled: !!testId,
    ...options,
  });
}
