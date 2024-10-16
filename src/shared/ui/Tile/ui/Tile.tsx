import { ReactNode } from 'react'
import s from './Tile.module.css'

interface ITileProps {
  children: ReactNode
}

export const Tile = ({ children }: ITileProps) => {
  return <div className={s.tileWrapper}>{children}</div>
}
