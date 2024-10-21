import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  getApiAuthGetCurrentUser,
  GetUserProfileQuery,
  GetUserProfileResponse,
  GetUserReferralsQuery,
  GetUserReferralsResponse,
  GetUsersListQuery,
  GetUsersListResponse,
  postApiUsersGetUserProfile,
  postApiUsersGetUserReferrals,
  postApiUsersGetUsersList,
} from "../../shared/api/generated";

const userProfileKey = ["user-profile"] as unknown[];
const userReferralsKey = ["user-referrals"] as unknown[];

export function useGetCurrentUser() {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: () => getApiAuthGetCurrentUser(),
  });
}

export function useGetProfileQuery(
  { userId }: GetUserProfileQuery,
  options?: Omit<
    UseQueryOptions<GetUserProfileResponse, Error>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery<GetUserProfileResponse, Error>({
    queryKey: userProfileKey.concat([{ userId }]),
    queryFn: () => postApiUsersGetUserProfile({ userId }),
    enabled: !!userId,
    ...options,
  });
}

export function useGetUserReferralsQuery(
  { userId, skip, take }: GetUserReferralsQuery,
  options?: Omit<
    UseQueryOptions<GetUserReferralsResponse, Error>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery<GetUserReferralsResponse, Error>({
    queryKey: userReferralsKey.concat([{ userId }]),
    queryFn: () => postApiUsersGetUserReferrals({ userId, skip, take }),
    enabled: !!userId,
    ...options,
  });
}

export function useGetUsersListQuery(
  { fullNameTerm, userNameTerm, take, skip }: GetUsersListQuery,
  options?: Omit<
    UseQueryOptions<GetUsersListResponse, Error>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery<GetUsersListResponse, Error>({
    queryKey: ["users-list", { fullNameTerm, userNameTerm, take, skip }],
    queryFn: () =>
      postApiUsersGetUsersList({ fullNameTerm, userNameTerm, take, skip }),
    ...options,
  });
}
