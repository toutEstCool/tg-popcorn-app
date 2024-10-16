import s from './AchievementsList.module.css'
import classNames from 'classnames'
import RecommendtaionPng from '../../../../shared/assets/images/recommendation.png'
import PopcorLoverPng from '../../../../shared/assets/images/popcorn-lover.png'
import DieHardPng from '../../../../shared/assets/images/die-hard.png'
import RefferalMasterPng from '../../../../shared/assets/images/referral-master.png'
import SoulCompanyPng from '../../../../shared/assets/images/soul-company.png'

interface IAchievementsListProps {
  className?: string
}

export const AchievementsList = ({ className }: IAchievementsListProps) => {
  const achievements = [
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
      id: 3,
      title: 'Реферальный мастер',
      description: '+3000 POPCOIN',
      points: 3000,
      iconSrc: RefferalMasterPng,
      achieved: false
    },
    {
      id: 3,
      title: 'Душа компании',
      description: '+3000 POPCOIN',
      points: 3000,
      iconSrc: SoulCompanyPng,
      achieved: false
    }
  ]

  return (
    <div className={className}>
      <div className={s.achievementsGrid}>
        {achievements.map((achievement) => (
          <div key={achievement.id} className={s.achievementCard}>
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
            <div className={s.achievementInfo}>
              <span className={s.achievementName}>{achievement?.title}</span>
              <span className={s.achievementReward}>
                {achievement?.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
