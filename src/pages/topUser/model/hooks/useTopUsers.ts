import { useEffect } from 'react'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch'
import { fetchUsersList } from '../../../../entities/user'
import { useAppSelector } from '../../../../shared/hooks/useAppSelector'
import {
  getTotalUsers,
  getUsers,
  getUsersIsLoading
} from '../../../../entities/user/model/selectors/getUsers/getUsers'
import { getUsersIsFetched } from '../../../../entities/user/model/selectors/getUsers/getUsersIsFetched'

export const useTopUsers = (searchTerm: string) => {
  const dispatch = useAppDispatch()

  const users = useAppSelector(getUsers)
  const totalCount = useAppSelector(getTotalUsers)
  const isLoading = useAppSelector(getUsersIsLoading)
  const isFetched = useAppSelector(getUsersIsFetched)

  console.log(isFetched)

  useEffect(() => {
    if (!isFetched) {
      dispatch(
        fetchUsersList({
          fullNameTerm: searchTerm,
          userNameTerm: searchTerm,
          skip: 0,
          take: 10
        })
      )
    }
  }, [dispatch, searchTerm, isFetched])

  return { users, totalCount, isLoading }
}
