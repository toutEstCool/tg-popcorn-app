import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getUserError = (state: StateSchema) => state?.user?.error
