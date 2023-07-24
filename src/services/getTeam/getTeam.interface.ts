import { Pagination } from '@/common/interface/page'

export interface Teams extends Pagination {
  content: TeamContent[]
}

export interface TeamContent {
  name: string
  id: number
  thumbnail: string
}
