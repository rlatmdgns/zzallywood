import { http } from '@/core/http'
import { API_URL } from '@/constants/apiUrl'
import { EntireMeme } from '@/services/getMemes/getMemes.interface'

const getMemes = () => {
  return http.get<EntireMeme>(API_URL.MEMES)
}

export default getMemes
