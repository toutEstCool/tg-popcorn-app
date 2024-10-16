import {
  EarnIcon,
  EducationIcon,
  MenuIcon,
  ProfileIcon
} from '../../IconsComponents'
import s from './Navbar.module.css'
import { useLocation } from 'react-router-dom'
import { NavItem } from './NavItem/NavItem'

export const Navbar = () => {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className={s.header}>
      <nav className={`${s.nav} ${s.container}`}>
        <div className={s.nav__menu}>
          <ul className={s.nav__list}>
            <NavItem
              to="/profile"
              label="Профиль"
              Icon={ProfileIcon}
              isActive={isActive('/profile')}
            />
            <NavItem
              to="/academy"
              label="Академия"
              Icon={EducationIcon}
              isActive={isActive('/academy')}
            />
            <NavItem
              to="/earn"
              label="Earn"
              Icon={EarnIcon}
              isActive={isActive('/earn')}
            />
            <NavItem
              to="/menu"
              label="Меню"
              Icon={MenuIcon}
              isActive={isActive('/menu')}
            />
          </ul>
        </div>
      </nav>
    </header>
  )
}
