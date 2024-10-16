import { $api } from '../../../../../shared/api/api'

// interface GetUserProfileRequest {
//   userId: string
// }

interface GetUserProfileResponse {
  id: string
  accountName: string
  fullName: string
  score: number
}

export const getUserProfile = async (
  userId: string
): Promise<GetUserProfileResponse> => {
  const response = await $api.post<GetUserProfileResponse>(
    'Users/getUserProfile',
    { userId }
  )
  return response.data
}
