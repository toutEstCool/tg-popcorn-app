import { useEffect } from 'react'
import { fetchTestsList } from '../model/services/fetchTestsList/fetchTestsList'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { getTestError } from '../model/selectors/getTestError/getTestError'
import { getTestList } from '../model/selectors/getTestList/getTestList'
import { getTestIsLoading } from '../model/selectors/getTestIsLoading/getTestIsLoading'

interface UseFetchTestsListParams {
  skip?: number
  take?: number
}

export const useFetchTestsList = ({
  skip = 0,
  take = 10
}: UseFetchTestsListParams) => {
  const dispatch = useAppDispatch()

  const testIsLoading = useAppSelector(getTestIsLoading)
  const testError = useAppSelector(getTestError)
  const testList = useAppSelector(getTestList)

  useEffect(() => {
    dispatch(fetchTestsList({ skip, take }))
  }, [dispatch, skip, take])

  return {
    testList,
    testIsLoading,
    testError
  }
}
