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
  error: string | null
}
