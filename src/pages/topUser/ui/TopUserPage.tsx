import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'

export const TopUserPage = () => {
  // const [searchTerm, setSearchTerm] = useState('')
  // const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm)

  // const debouncedSetSearchTerm = useCallback(
  //   debounce((value) => {
  //     setDebouncedSearchTerm(value.toLowerCase())
  //   }, 300),
  //   []
  // )

  // const handleSearchChange = (value: string) => {
  //   setSearchTerm(value)
  //   debouncedSetSearchTerm(value)
  // }

  // const { users, totalCount, isLoading } = useTopUsers(debouncedSearchTerm)

  return (
    <AppLayout>
      <HeaderWithBackButton title="Топ пользователей" />
      {/* <div className={s.topUserWrapper}>
        <span className={s.topUserCountTitle}>{totalCount}</span>
        <SearchInput value={searchTerm} onChange={handleSearchChange} />
        {isLoading ? (
          <Loader />
        ) : (
          <div
            className={classNames(users?.length > 0 ? s.topUsersList : null)}
          >
            {users?.map((user) => (
              <UserListItem key={user?.id} user={user} />
            ))}
          </div>
        )}
      </div> */}
    </AppLayout>
  )
}
