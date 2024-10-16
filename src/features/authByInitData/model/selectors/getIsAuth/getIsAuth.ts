import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getIsAuthenticated = (state: StateSchema) =>
  state?.auth?.isAuthenticated
