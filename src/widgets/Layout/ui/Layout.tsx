import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../../Navbar'

export const Layout = () => {
  const location = useLocation()

  const noNavBarExactPaths = ['/', '/lecture', '/test', '/test-finish']

  const noNavBarDynamicPaths = ['/test-first-step', '/test-process']

  const isExactNoNavBarPath = noNavBarExactPaths.includes(location.pathname)

  const isDynamicNoNavBarPath = noNavBarDynamicPaths.some((basePath) =>
    location.pathname.startsWith(basePath)
  )

  const shouldShowNavbar = !(isExactNoNavBarPath || isDynamicNoNavBarPath)

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Outlet />
    </>
  )
}
