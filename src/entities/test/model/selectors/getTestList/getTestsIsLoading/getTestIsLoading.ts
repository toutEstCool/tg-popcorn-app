import { StateSchema } from '../../../../../../app/providers/store/ui/MainStore'

export const getTestsIsLoading = (state: StateSchema) =>
  state?.tests.isLoading || false
