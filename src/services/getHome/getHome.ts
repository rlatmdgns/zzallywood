import { http } from '@/core/http'
import { GetHome } from '@/services/getHome/getHome.interface'

const getHome = () => {
  return http.get<GetHome>('/')
}

export default getHome
