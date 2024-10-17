import { createBrowserRouter } from 'react-router-dom'
import { ProfilePage } from '../../../../pages/profile'
import { MenuPage } from '../../../../pages/menu'
import { EarnPage } from '../../../../pages/earn'
import { AcademyPage } from '../../../../pages/academy'
import { Layout } from '../../../../widgets/Layout'
import { AchievementPage } from '../../../../pages/achievement'
import { SettingsPage } from '../../../../pages/settings'
import { LanguagePage } from '../../../../pages/language'
import { LevelPage } from '../../../../pages/level'
import { TopUserPage } from '../../../../pages/topUser'
import { UserProfilePage } from '../../../../pages/userProfile'
import { WikiBasePage } from '../../../../pages/wikiBase'
import { LecturesPage } from '../../../../pages/lectures'
import { LecturePage } from '../../../../pages/lecture'
import { TestsPage } from '../../../../pages/tests'
import { TestPage } from '../../../../pages/test'
import { TestFinishPage } from '../../../../pages/testFinish'
import { LoginPage } from '../../../../pages/login'
import { TestFirstPage } from '../../../../pages/testFirstStep'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <LoginPage /> },
      { path: '/profile', element: <ProfilePage /> },
      { path: '/menu', element: <MenuPage /> },
      { path: '/earn', element: <EarnPage /> },
      { path: '/academy', element: <AcademyPage /> },
      { path: '/achievements', element: <AchievementPage /> },
      { path: '/settings', element: <SettingsPage /> },
      { path: '/language', element: <LanguagePage /> },
      { path: '/level', element: <LevelPage /> },
      { path: '/top-user', element: <TopUserPage /> },
      { path: '/user-profile/:userId', element: <UserProfilePage /> },
      { path: '/knowledge-base', element: <WikiBasePage /> },
      { path: '/lectures', element: <LecturesPage /> },
      { path: '/lecture', element: <LecturePage /> },
      { path: '/tests', element: <TestsPage /> },
      { path: '/test-first-step/:testId', element: <TestFirstPage /> },
      { path: '/test-process/:testId', element: <TestPage /> },
      { path: '/test-finish', element: <TestFinishPage /> }
    ]
  }
])
