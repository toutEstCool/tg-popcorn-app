export interface Achievement {
  achievementId: number
  nameRu: string
  nameEn: string
  imageUrl: string
  scoreForAchievement: number
  achieved: boolean
  achievedOn: string | null
}

export interface AchievementsState {
  overviewAchievements: Achievement[]
  allAchievements: Achievement[]
  overviewLoaded: boolean
  allLoaded: boolean
  overviewLoading: boolean
  allLoading: boolean
  selectedAchievement: AchievementDetails | null
  selectedLoading: boolean
  selectedLoaded: boolean
  error: string | null
}

export interface AchievementDetails {
  achievementId: number
  nameRu: string
  nameEn: string
  descriptionRu: string
  descriptionEn: string
  requiredActionRu: string
  requiredActionEn: string
  imageUrl: string
  scoreForAchievement: number
  currentProgress: number
  requiredProgress: number
  achieved: boolean
  achievedOn: string | null
}
