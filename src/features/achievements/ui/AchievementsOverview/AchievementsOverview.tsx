import { Link } from 'react-router-dom'
import s from './AchievementsOverview.module.css'
import classNames from 'classnames'
import { ChevronRight } from 'lucide-react'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../../shared/hooks/useAppSelector'
import {
  fetchUserAchievements,
  getOverviewAchievements,
  getOverviewAchievementsIsLoading
} from '../../../../entities/achievements'
import { useEffect } from 'react'
import { Achievement } from '../../../../entities/achievements/model/types/achievementsSchema'
import { Loader } from '../../../../shared/ui/Loader'

interface IAchievementProps {
  className?: string
  isOwnProfile?: boolean
  userId: string
}

export const AchievementsOverview = ({
  className,
  isOwnProfile = false,
  userId
}: IAchievementProps) => {
  const dispatch = useAppDispatch()
  const achievements = useAppSelector(getOverviewAchievements)
  const isLoading = useAppSelector(getOverviewAchievementsIsLoading)
  const isLoaded = achievements?.length > 0

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchUserAchievements({ userId, skip: 0, take: 4 }))
    }
  }, [dispatch, userId, isLoaded])

  return (
    <div className={classNames(s.achievementsOverviewContainer, className)}>
      {isOwnProfile && (
        <div className={s.header}>
          <h2 className={s.title}>Достижения</h2>
          <Link to="/achievements" className={s.viewAllLink}>
            <span>Все</span>
            <ChevronRight />
          </Link>
        </div>
      )}
      <div className={s.achievementsList}>
        {isLoading ? (
          <div className={s.loader}>
            <Loader />
          </div>
        ) : (
          achievements?.map((achievement: Achievement) => (
            <div key={achievement.achievementId} className={s.achievementItem}>
              <img
                className={classNames(
                  s.achievementIcon,
                  !achievement.achieved && s.notAchieved
                )}
                src={achievement.imageUrl}
                alt={achievement.nameEn}
                width={94}
                height={100}
              />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
