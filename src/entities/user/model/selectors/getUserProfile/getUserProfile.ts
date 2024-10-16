import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getUserProfile = (state: StateSchema) => state?.user?.userProfile
