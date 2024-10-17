import { StateSchema } from '../../../../../../app/providers/store/ui/MainStore'

export const getTestInfoDescription = (state: StateSchema) =>
  state?.test?.description || ''
