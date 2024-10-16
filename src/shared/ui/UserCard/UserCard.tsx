import { ReactNode } from 'react'
import s from './UserCard.module.css'

type IUiUserCardProps = {
  children: ReactNode
}

export const UiUserCard = ({ children }: IUiUserCardProps) => {
  return <section className={s.userCardUiWrapper}>{children}</section>
}
