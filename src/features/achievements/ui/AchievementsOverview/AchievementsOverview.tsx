import { Link } from 'react-router-dom'
import s from './AchievementsOverview.module.css'
import classNames from 'classnames'
import { ChevronRight } from 'lucide-react'
import RecommendtaionPng from '../../../../shared/assets/images/recommendation.png'
import PopcorLoverPng from '../../../../shared/assets/images/popcorn-lover.png'
import DieHardPng from '../../../../shared/assets/images/die-hard.png'
import RefferalMasterPng from '../../../../shared/assets/images/referral-master.png'

interface IAchievement {
  id: number
  achieved: boolean
  title: string
  description: string
  points: number
  iconSrc: string
}

interface IIAchievementProps {
  className?: string
  isOwnProfile?: boolean
}

export const AchievementsOverview = ({
  className,
  isOwnProfile = false
}: IIAchievementProps) => {
  const achievements: IAchievement[] = [
    {
      id: 1,
      title: 'Рекомендасьон',
      description: '+6000 POPCOIN',
      points: 6000,
      iconSrc: RecommendtaionPng,
      achieved: true
    },
    {
      id: 2,
      title: 'Любитель попкорна',
      description: '+3000 POPCOIN',
      points: 3000,
      iconSrc: PopcorLoverPng,
      achieved: false
    },
    {
      id: 3,
      title: 'Крепкий орешек',
      description: '+3000 POPCOIN',
      points: 3000,
      iconSrc: DieHardPng,
      achieved: false
    },
    {
      id: 4,
      title: 'Реферальный мастер',
      description: '+3000 POPCOIN',
      points: 3000,
      iconSrc: RefferalMasterPng,
      achieved: false
    }
  ]

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
        {achievements?.slice(0, 4).map((achievement: IAchievement) => (
          <div key={achievement.id} className={s.achievementItem}>
            <img
              className={classNames(
                s.achievementIcon,
                !achievement.achieved && s.notAchieved
              )}
              src={achievement?.iconSrc}
              alt={achievement?.title}
              width={94}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
