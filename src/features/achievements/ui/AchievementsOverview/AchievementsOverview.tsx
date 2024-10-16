import { Link } from 'react-router-dom'
import s from './AchievementsOverview.module.css'
import classNames from 'classnames'
import { ChevronRight } from 'lucide-react'
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../../../shared/hooks/useAppSelector'
import {
  fetchUserAchievements,
  getAchievements,
  getAchievementsIsLoading
} from '../../../../entities/achievements'
import { useEffect } from 'react'

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
  const achievementsState = useAppSelector(getAchievements)
  const isLoading = useAppSelector(getAchievementsIsLoading)

  useEffect(() => {
    dispatch(fetchUserAchievements({ userId, skip: 0, take: 4 }))
  }, [dispatch, userId])

  const achievements = achievementsState.achievements

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
          <p>Loading...</p>
        ) : (
          achievements?.map((achievement) => (
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
