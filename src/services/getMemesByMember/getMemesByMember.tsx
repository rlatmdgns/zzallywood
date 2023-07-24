import { http } from '@/core/http'
import { API_URL } from '@/constants/apiUrl'
import { MemesByMember } from '@/services/getMemesByMember/getMemesByMember.interface'

const getMemesByMember = (id: string) => {
  return http.get<MemesByMember>(API_URL.MEMBER_MEMES(id))
}

export default getMemesByMember
