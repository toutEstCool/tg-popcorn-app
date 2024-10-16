import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getUserIsLoading = (state: StateSchema) =>
  state?.user?.isLoading || false
