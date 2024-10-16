import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import { TopUserIcon } from '../../../widgets/IconsComponents'
import { ChevronRight } from 'lucide-react'
import s from './LevelPage.module.css'
import { UserXPBar } from '../../../shared/ui/UserXPBar'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import {
  getCurrentUser,
  getUserProfile,
  getUserIsLoading
} from '../../../entities/user'
import { fetchUserProfile } from '../../../entities/user/model/services/fetchUserProfile/fetchUserProfile'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { Loader } from '../../../shared/ui/Loader'
import { LevelsTable } from '../../../entities/grades'

export const LevelPage = () => {
  const dispatch = useAppDispatch()
  const userProfile = useAppSelector(getUserProfile)
  const currentUser = useAppSelector(getCurrentUser)
  const isLoading = useAppSelector(getUserIsLoading)

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchUserProfile(currentUser.id))
    }
  }, [dispatch, currentUser])

  return (
    <AppLayout>
      <HeaderWithBackButton title="Уровни" />
      <div className={s.topLevelsContainer}>
        <Link
          className={s.topMenuItemLink}
          to={'/top-user'}
          aria-label="Топ пользователей "
        >
          <TopUserIcon />
          <div className={s.infoTitle}>
            <span className={s.title}>Топ пользователей </span>
          </div>
          <ChevronRight color="#7C7C7C" />
        </Link>
        {isLoading ? (
          <Loader />
        ) : userProfile ? (
          <UserXPBar
            gradeInfo={userProfile.gradeInfo}
            className={s.xbBar}
            score={userProfile.score}
          />
        ) : (
          <p>Данные не найдены...</p>
        )}
        <LevelsTable />
      </div>
    </AppLayout>
  )
}
