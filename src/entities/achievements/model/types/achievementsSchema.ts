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
  achievements: Achievement[]
  totalCount: number
  isLoading: boolean
  error: string | null
}
