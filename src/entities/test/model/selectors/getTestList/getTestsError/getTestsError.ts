import { StateSchema } from '../../../../../../app/providers/store/ui/MainStore'

export const getTestsError = (state: StateSchema) => state?.tests?.error
