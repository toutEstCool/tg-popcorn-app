import { ReactNode } from 'react'
import s from './AppLayout.module.css'

interface IAppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: IAppLayoutProps) => {
  return <main className={s.appLayoutWrapper}>{children}</main>
}
