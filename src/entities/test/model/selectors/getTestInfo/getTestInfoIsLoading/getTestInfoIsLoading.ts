import { StateSchema } from '../../../../../../app/providers/store/ui/MainStore'

export const getTestInfoIsLoading = (state: StateSchema) =>
  state?.test.isLoading || false
