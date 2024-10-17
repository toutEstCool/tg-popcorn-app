import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { fetchTestInfo } from '../model/services/fetchTestInfo/fetchTestInfo'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { getTestInfoIsLoading } from '../model/selectors/getTestInfo/getTestInfoIsLoading/getTestInfoIsLoading'
import { getTestInfoError } from '../model/selectors/getTestInfo/getTestInfoError/getTestInfoError'
import { getTestInfoTitle } from '../model/selectors/getTestInfo/getTestTitle/getTestTitle'
import { getTestInfoDescription } from '../model/selectors/getTestInfo/getTestInfoDescription/getTestInfoDescription'
import { getTestInfoQuestions } from '../model/selectors/getTestInfo/getTestInfoQuestions/getTestInfoQuestions'
import { getTestInfoPreviewImage } from '../model/selectors/getTestInfo/getTestInfoPreviewImage/getTestInfoPreviewImage'

export const useFetchTestInfo = () => {
  const dispatch = useAppDispatch()
  const { testId } = useParams<{ testId: string }>()

  useEffect(() => {
    if (testId) {
      dispatch(fetchTestInfo(Number(testId)))
    }
  }, [dispatch, testId])

  const isLoading = useAppSelector(getTestInfoIsLoading)
  const error = useAppSelector(getTestInfoError)
  const title = useAppSelector(getTestInfoTitle)
  const description = useAppSelector(getTestInfoDescription)
  const questions = useAppSelector(getTestInfoQuestions)
  const testPreviewImage = useAppSelector(getTestInfoPreviewImage)

  return {
    title,
    description,
    testPreviewImage,
    questions,
    isLoading,
    error
  }
}
