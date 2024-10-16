import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getLoginError = (state: StateSchema) => state?.auth?.error
