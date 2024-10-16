import { $api } from '../../../../../shared/api/api'

interface GetCurrentUserResponse {
  id: string
  name: string
  roles: string[]
}

export const getCurrentUser = async (): Promise<GetCurrentUserResponse> => {
  const response = await $api.get<GetCurrentUserResponse>('Auth/getCurrentUser')
  return response.data
}
