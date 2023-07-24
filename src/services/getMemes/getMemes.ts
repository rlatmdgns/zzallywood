import { http } from '@/core/http'
import { API_URL } from '@/constants/apiUrl'

const getMemes = () => {
  return http.get(API_URL.MEMES)
}

export default getMemes
