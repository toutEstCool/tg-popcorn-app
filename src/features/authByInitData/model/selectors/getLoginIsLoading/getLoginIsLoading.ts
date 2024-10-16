import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getLoginIsLoading = (state: StateSchema) =>
  state?.auth?.isLoading || false
