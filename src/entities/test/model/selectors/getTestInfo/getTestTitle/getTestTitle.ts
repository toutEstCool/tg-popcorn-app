import { StateSchema } from '../../../../../../app/providers/store/ui/MainStore'

export const getTestInfoTitle = (state: StateSchema) => state?.test?.title || ''
