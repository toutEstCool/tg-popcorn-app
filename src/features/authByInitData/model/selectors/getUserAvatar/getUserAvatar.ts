import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getUserAvatar = (state: StateSchema) =>
  state?.auth?.photoUrl || null
