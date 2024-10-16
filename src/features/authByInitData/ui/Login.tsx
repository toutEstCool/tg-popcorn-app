import { useEffect } from 'react'
import { loginWithTelegram } from '../model/services/loginWithTelegram/loginWithTelegram'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { getLoginIsLoading } from '../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../model/selectors/getLoginError/getLoginError'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { Loader } from '../../../shared/ui/Loader'
import { Error } from '../../../shared/ui/Error'
import { useNavigate } from 'react-router-dom'
import { getIsAuthenticated } from '../model/selectors/getIsAuth/getIsAuth'

export const LoginComponent = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const isLoading = useAppSelector(getLoginIsLoading)
  const error = useAppSelector(getLoginError)
  const auth = useAppSelector(getIsAuthenticated)

  useEffect(() => {
    // dispatch(loginWithTelegram({ referralCode: 'optionalCode' }))
    dispatch(loginWithTelegram({}))
  }, [dispatch])

  useEffect(() => {
    if (auth) {
      navigate('/profile')
    }
  }, [auth, navigate])

  const urlParams = new URLSearchParams(window.location.search)
  console.log(urlParams.get('ref'))

  return (
    <div>
      {isLoading && <Loader />}
      {error && (
        <Error
          btnText="Попробовать еще раз"
          errorText={error}
          onRetry={() =>
            dispatch(loginWithTelegram({ referralCode: 'optionalCode' }))
          }
        />
      )}
    </div>
  )
}
