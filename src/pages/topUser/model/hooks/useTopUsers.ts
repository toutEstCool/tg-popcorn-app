import { useGetUsersListQuery } from "../../../../entities/user-v2/queries";

export const useTopUsers = (debouncedSearchTerm: string, take?: number) => {
  const { data, isLoading, isError } = useGetUsersListQuery({
    fullNameTerm: debouncedSearchTerm,
    userNameTerm: debouncedSearchTerm,
    skip: 0,
    take: take,
  });

  const users = data?.items || [];
  const totalCount = data?.totalCount || 0;

  return {
    users,
    totalCount,
    isLoading,
    isError,
  };
};
