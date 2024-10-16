import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getUsersIsFetched = (state: StateSchema) =>
  state.users?.isFetched || false
