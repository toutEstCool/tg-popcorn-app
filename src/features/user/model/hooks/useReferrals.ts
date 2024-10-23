import {
  useGetCurrentUser,
  useGetUserReferralsQuery,
} from "../../../../entities/user/queries";
import { GetUserReferralsQuery } from "../../../../shared/api/generated";

export const useReferrals = ({ skip = 0, take = 5 }: GetUserReferralsQuery) => {
  const { data: currentUserData, isLoading: isLoadingCurrentUser } =
    useGetCurrentUser();

  const userId = currentUserData?.id;

  const {
    data,
    isLoading: isLoadingUserReferrals,
    isError: isErrorUserReferrals,
  } = useGetUserReferralsQuery(
    { userId, skip, take },
    {
      enabled: !!userId,
    },
  );

  const isLoading = isLoadingCurrentUser || isLoadingUserReferrals;
  const userReferralsCount = data?.totalCount;
  const referrals = data?.items || [];

  return {
    referrals,
    userReferralsCount,
    isLoading,
    isErrorUserReferrals,
  };
};
