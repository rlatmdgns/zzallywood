import { authorizedHttp } from '@/core/http'
import { GetHomeResponse } from '@/services/getHome/getHome.interface'

async function getHome(): Promise<GetHomeResponse> {
  const result = await authorizedHttp.get('/')
  return result.homeViews
}

export default getHome
