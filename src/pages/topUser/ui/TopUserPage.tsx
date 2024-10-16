import { useState, useCallback } from 'react'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './TopUserPage.module.css'
import { Loader } from '../../../shared/ui/Loader'
import debounce from 'lodash.debounce'
import classNames from 'classnames'
import { useTopUsers } from '../model/hooks/useTopUsers'
import { SearchInput } from '../../../features/userSearch'
import { UserListItem } from '../../../entities/user'

export const TopUserPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm)

  const debouncedSetSearchTerm = useCallback(
    debounce((value) => {
      setDebouncedSearchTerm(value.toLowerCase())
    }, 700), // Увеличенная задержка для уменьшения количества запросов
    []
  )

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    debouncedSetSearchTerm(value)
  }

  const { users, totalCount, isLoading } = useTopUsers(debouncedSearchTerm)

  return (
    <AppLayout>
      <HeaderWithBackButton title="Топ пользователей" />
      <div className={s.topUserWrapper}>
        <span className={s.topUserCountTitle}>{totalCount}</span>
        <SearchInput value={searchTerm} onChange={handleSearchChange} />
        {isLoading ? (
          <Loader />
        ) : (
          <div
            className={classNames(users?.length > 0 ? s.topUsersList : null)}
          >
            {users?.map((user) => (
              <UserListItem key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  )
}
