import {
  useGetCurrentUser,
  useGetProfileQuery,
} from "../../../entities/user-v2/queries";

export const useProfile = (id?: string) => {
  const { data: currentUserData, isLoading: isLoadingCurrentUser } =
    useGetCurrentUser();

  const userId = id || currentUserData?.id;

  const {
    data: profile,
    isLoading: isLoadingProfile,
    isError: isErrorProfile,
  } = useGetProfileQuery(
    { userId },
    {
      enabled: !!userId,
    },
  );

  const isLoading = isLoadingCurrentUser || isLoadingProfile;

  return {
    profile,
    isLoading,
    isErrorProfile,
  };
};
