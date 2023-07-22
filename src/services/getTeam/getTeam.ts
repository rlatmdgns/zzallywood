import { http } from '@/core/http'
import { Teams } from '@/services/getTeam/getTeam.interface'
import { API_URL } from '@/constants/apiUrl'

const getTeam = () => {
  return http.get<Teams>(API_URL.TEAMS)
}

export default getTeam
