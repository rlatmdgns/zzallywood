import { http } from '@/core/http'
import { API_URL } from '@/constants/apiUrl'
import { Members } from '@/services/getMembers/getMembers.interface'

const getMembers = (id: string) => {
  return http.get<Members>(API_URL.TEAM_MEMBERS(id))
}

export default getMembers
