import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../../Navbar'

export const Layout = () => {
  const location = useLocation()

  const noNavBarPaths = ['/lecture', '/test', '/test-finish', '/']
  const shouldShowNavbar = !noNavBarPaths.includes(location.pathname)
  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Outlet />
    </>
  )
}
