import { useState, useCallback, useRef, useEffect } from "react";
import { HeaderWithBackButton } from "../../../shared/ui/HeaderWithBackButton";
import { AppLayout } from "../../../widgets/AppLayout";
import s from "./TopUserPage.module.css";
import { Loader } from "../../../shared/ui/Loader";
import debounce from "lodash.debounce";
import classNames from "classnames";
import { useTopUsers } from "../model/hooks/useTopUsers";
import { SearchInput } from "../../../features/userSearch";
import { UserListItem } from "../../../entities/user";
import { UserListItem as UserListType } from "../../../shared/api/generated";

export const TopUserPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const debouncedSetSearchTerm = useCallback(
    debounce((value) => {
      setDebouncedSearchTerm(value);
    }, 500),
    [],
  );

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    debouncedSetSearchTerm(value);
  };

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useTopUsers(debouncedSearchTerm, 15);

  const users = data?.pages.flatMap((page) => page.items ?? []) ?? [];
  const totalCount = data?.pages?.[0]?.totalCount ?? 0;

  useEffect(() => {
    const loadMoreObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    );

    if (loadMoreRef.current) {
      loadMoreObserver.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        loadMoreObserver.unobserve(loadMoreRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <AppLayout>
      <HeaderWithBackButton title="Топ пользователей" />
      <div className={s.topUserWrapper}>
        <span className={s.topUserCountTitle}>{totalCount}</span>
        <SearchInput value={searchTerm} onChange={handleSearchChange} />
        {isLoading && !isFetchingNextPage ? (
          <div className={s.loader}>
            <Loader />
          </div>
        ) : (
          <div
            className={classNames(users?.length > 0 ? s.topUsersList : null)}
          >
            {users?.map((user: UserListType) => (
              <UserListItem key={user.id} user={user} topUsers />
            ))}
            {isFetchingNextPage && (
              <div className={s.loader}>
                <Loader />
              </div>
            )}
            <div ref={loadMoreRef} className={s.loadMoreTrigger}></div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};
