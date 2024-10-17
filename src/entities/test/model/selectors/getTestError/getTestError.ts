import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getTestError = (state: StateSchema) => state?.test?.error
