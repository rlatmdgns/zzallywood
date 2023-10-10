import { Pagination } from '@/common/interface/page'

export interface Meme {
  id: number
  memberId?: number
  image: string
  title : string
  createdAt : string
  rankingAmt : number
}

export interface EntireMeme extends Pagination {
  content: Meme[]
}
