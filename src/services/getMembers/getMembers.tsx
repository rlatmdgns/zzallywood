import { http } from '@/core/http'
import { API_URL } from '@/constants/apiUrl'

const getMembers = (id: string) => {
  return http.get(API_URL.TEAM_MEMBERS(id))
}

export default getMembers
