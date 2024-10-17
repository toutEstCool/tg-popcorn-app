import { useEffect } from 'react'
import { fetchTestsList } from '../model/services/fetchTestsList/fetchTestsList'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { getTestsError } from '../model/selectors/getTestList/getTestsError/getTestsError'
import { getTestList } from '../model/selectors/getTestList/getTestsList/getTestList'
import { getTestsIsLoading } from '../model/selectors/getTestList/getTestsIsLoading/getTestIsLoading'

interface UseFetchTestsListParams {
  skip?: number
  take?: number
}

export const useFetchTestsList = ({
  skip = 0,
  take = 10
}: UseFetchTestsListParams) => {
  const dispatch = useAppDispatch()

  const testIsLoading = useAppSelector(getTestsIsLoading)
  const testError = useAppSelector(getTestsError)
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
