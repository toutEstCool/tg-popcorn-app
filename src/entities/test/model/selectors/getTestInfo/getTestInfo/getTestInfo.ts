import { StateSchema } from '../../../../../../app/providers/store/ui/MainStore'

export const getTestInfo = (state: StateSchema) => state?.test || []
