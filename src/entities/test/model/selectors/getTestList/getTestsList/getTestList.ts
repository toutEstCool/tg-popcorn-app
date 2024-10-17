import { StateSchema } from '../../../../../../app/providers/store/ui/MainStore'

export const getTestList = (state: StateSchema) => state?.tests?.items || []
