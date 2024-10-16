import s from './AchievementsList.module.css'
import classNames from 'classnames'

interface IAchievementsListProps {
  className?: string
  achievements: Achievement[]
}

interface Achievement {
  achievementId: number
  nameRu: string
  nameEn: string
  imageUrl: string
  scoreForAchievement: number
  achieved: boolean
  achievedOn: string | null
}

export const AchievementsList = ({
  className,
  achievements
}: IAchievementsListProps) => {
  return (
    <div className={className}>
      <div className={s.achievementsGrid}>
        {achievements.map((achievement) => (
          <div key={achievement.achievementId} className={s.achievementCard}>
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
            <div className={s.achievementInfo}>
              <span className={s.achievementName}>{achievement.nameRu}</span>
              <span className={s.achievementReward}>
                +{achievement.scoreForAchievement} POPCOIN
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
