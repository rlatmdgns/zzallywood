import { http } from '@/core/http'
import { API_URL } from '@/constants/apiUrl'

const getMemesByMember = (id: string) => {
  return http.get(API_URL.MEMBER_MEMES(id))
}

export default getMemesByMember
