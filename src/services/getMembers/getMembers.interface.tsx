import { Pagination } from '@/common/interface/page'
import { TeamContent } from '@/services/getTeam/getTeam.interface'

export interface Members extends Pagination {
  content: TeamContent[]
}
