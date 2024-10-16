import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { mainStore } from '../../store'
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app'

type Props = {
  children: ReactNode
}

export const MainProviders = ({ children }: Props) => {
  return (
    <WebAppProvider>
      <Provider store={mainStore}>{children}</Provider>
    </WebAppProvider>
  )
}
