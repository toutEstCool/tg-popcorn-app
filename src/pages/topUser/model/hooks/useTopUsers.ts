import { useInfiniteQuery } from "@tanstack/react-query";
import { postApiUsersGetUsersList } from "../../../../shared/api/generated";

export const useTopUsers = (debouncedSearchTerm: string, take: number = 10) => {
  return useInfiniteQuery({
    queryKey: ["top-users", debouncedSearchTerm],
    queryFn: ({ pageParam = 0 }) =>
      postApiUsersGetUsersList({
        fullNameTerm: debouncedSearchTerm,
        userNameTerm: debouncedSearchTerm,
        take,
        skip: pageParam,
      }),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.items || lastPage.items.length < take) {
        return undefined;
      }
      return allPages.length * take;
    },
    initialPageParam: 0,
  });
};
