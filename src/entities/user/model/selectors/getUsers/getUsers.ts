import { StateSchema } from '../../../../../app/providers/store/ui/MainStore'

export const getUsers = (state: StateSchema) => state.users.users
export const getTotalUsers = (state: StateSchema) => state.users.totalCount
export const getUsersIsLoading = (state: StateSchema) => state.users.isLoading
