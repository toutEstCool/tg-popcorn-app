import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getOverviewAchievementsIsLoading = (state: StateSchema) =>
  state?.achievements?.overviewLoading || false

export const getAllAchievementsIsLoading = (state: StateSchema) =>
  state?.achievements?.allLoading || false
