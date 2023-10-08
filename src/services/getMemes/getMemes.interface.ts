import { Pagination } from '@/common/interface/page'

export interface Meme {
  id: number
  memberId?: number
  teamId?: number
  createdBy: null | string
  image: string
  createdAt: string
}

export interface EntireMeme extends Pagination {
  content: Meme[]
}
