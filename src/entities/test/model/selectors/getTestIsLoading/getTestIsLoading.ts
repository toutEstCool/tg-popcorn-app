import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getTestIsLoading = (state: StateSchema) =>
  state?.test.isLoading || false
