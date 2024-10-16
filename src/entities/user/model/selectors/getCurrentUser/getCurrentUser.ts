import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getCurrentUser = (state: StateSchema) => state?.user?.currentUser
