import axios from 'axios'

interface RefreshTokenResponse {
  accessToken: string
  refreshToken: string
}

export const refreshToken = async (
  refreshToken: string
): Promise<RefreshTokenResponse> => {
  const response = await axios.post<RefreshTokenResponse>(
    'https://taptap.af-dev.ru/api/Auth/refreshToken',
    {
      refreshToken
    }
  )
  return response.data
}
