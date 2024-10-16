import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getAchievementsIsLoading = (state: StateSchema) =>
  state?.achievements?.isLoading || false
