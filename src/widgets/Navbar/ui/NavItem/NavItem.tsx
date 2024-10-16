import { Link } from 'react-router-dom'
import s from './NavItem.module.css'

type NavItemProps = {
  to: string
  label: string
  Icon: React.ComponentType<{ isActive: boolean }>
  isActive: boolean
}

export const NavItem = ({ to, label, Icon, isActive }: NavItemProps) => {
  return (
    <li className={s.nav__item}>
      <Link
        to={to}
        className={`${s.nav__link} ${isActive ? s.nav__link_active : ''}`}
        aria-label={`Перейти в ${label}`}
      >
        <Icon isActive={isActive} />
        <span className={s.nav__name}>{label}</span>
      </Link>
    </li>
  )
}
