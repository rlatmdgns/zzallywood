import { Pageable, Sort } from '@/common/interface/page'

export interface Meme {
  id: number
  memberId?: number
  teamId?: number
  createdBy: null | string
  image: string
  createdAt: string
  modifiedBy: null | string
  modifiedAt: string
}

export interface EntireMeme {
  content: Meme[]
  pageable: Pageable
  size: number
  number: number
  sort: Sort
  numberOfElements: number
  first: boolean
  last: boolean
  empty: boolean
}
