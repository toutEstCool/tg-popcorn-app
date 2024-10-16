import { useEffect, useRef } from 'react'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch'
import { fetchUsersList } from '../../../../entities/user'
import { useAppSelector } from '../../../../shared/hooks/useAppSelector'
import {
  getTotalUsers,
  getUsers,
  getUsersIsLoading
} from '../../../../entities/user/model/selectors/getUsers/getUsers'
import { resetUsersState } from '../../../../entities/user/model/slice/usersSlice'

export const useTopUsers = (debouncedSearchTerm: string) => {
  const dispatch = useAppDispatch()

  const users = useAppSelector(getUsers)
  const totalCount = useAppSelector(getTotalUsers)
  const isLoading = useAppSelector(getUsersIsLoading)

  const hasFetchedInitially = useRef(false)

  useEffect(() => {
    if (!hasFetchedInitially.current) {
      dispatch(
        fetchUsersList({
          fullNameTerm: '',
          userNameTerm: '',
          skip: 0,
          take: 10
        })
      )
      hasFetchedInitially.current = true
    } else {
      dispatch(resetUsersState())
      dispatch(
        fetchUsersList({
          fullNameTerm: debouncedSearchTerm,
          userNameTerm: debouncedSearchTerm,
          skip: 0,
          take: 10
        })
      )
    }
  }, [dispatch, debouncedSearchTerm])

  return { users, totalCount, isLoading }
}
