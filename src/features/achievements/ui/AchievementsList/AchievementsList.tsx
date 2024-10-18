import { BottomDrawer } from '../../../../shared/ui/BottomDrawer'
import { useAchievementDetails } from '../../hooks/useAchievementDetails'
import s from './AchievementsList.module.css'
import classNames from 'classnames'
import { useState } from 'react'
import { getCurrentUser } from '../../../../entities/user'
import { useAppSelector } from '../../../../shared/hooks/useAppSelector'

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
  const currentUser = useAppSelector(getCurrentUser)
  const [selectedAchievementId, setSelectedAchievementId] = useState<
    number | null
  >(null)

  const { achievementDetails, loading, error } = useAchievementDetails(
    currentUser ? currentUser.id : '',
    selectedAchievementId || 0
  )

  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false)

  const handleAchievementClick = (achievementId: number) => {
    setSelectedAchievementId(achievementId)
    setBottomSheetOpen(true)
  }

  const handleCloseSheet = () => {
    setBottomSheetOpen(false)
    setSelectedAchievementId(null)
  }

  return (
    <div className={className}>
      <div>
        <BottomDrawer
          isLoading={loading}
          error={error}
          isOpen={isBottomSheetOpen}
          onClose={handleCloseSheet}
          title={achievementDetails?.descriptionRu}
          icon={achievementDetails?.imageUrl}
        />
      </div>
      <div className={s.achievementsGrid}>
        {achievements.map((achievement) => (
          <div
            onClick={() => handleAchievementClick(achievement.achievementId)}
            key={achievement.achievementId}
            className={s.achievementCard}
          >
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
                +{achievement.scoreForAchievement} corncoin
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
