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

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initDataUnsafe?: {
          tgWebAppStartParam?: string
        }
        initData: string
      }
    }
  }
}

export const LoginComponent = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const isLoading = useAppSelector(getLoginIsLoading)
  const error = useAppSelector(getLoginError)
  const auth = useAppSelector(getIsAuthenticated)

  const urlParams = new URLSearchParams(window.location.search)
  const refFromUrl = urlParams.get('startapp')

  const startParam = window.Telegram?.WebApp?.initDataUnsafe?.tgWebAppStartParam

  const referralCode = refFromUrl || startParam

  console.log(refFromUrl)

  useEffect(() => {
    dispatch(loginWithTelegram({ referralCode: referralCode || undefined }))
  }, [dispatch, referralCode])

  useEffect(() => {
    if (auth) {
      navigate('/profile')
    }
  }, [auth, navigate])

  return (
    <div>
      {isLoading && <Loader />}
      {error && (
        <Error
          btnText="Попробовать еще раз"
          errorText={error}
          onRetry={() =>
            dispatch(
              loginWithTelegram({ referralCode: referralCode || undefined })
            )
          }
        />
      )}
    </div>
  )
}
