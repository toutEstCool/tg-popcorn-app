import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getOverviewAchievements = (state: StateSchema) =>
  state.achievements.overviewAchievements

export const getAllAchievements = (state: StateSchema) =>
  state.achievements.allAchievements
