import { Pageable, Sort } from '@/common/interface/page'

export interface Teams {
  size: number
  content: Content[]
  number: number
  sort: Sort
  numberOfElements: number
  pageable: Pageable
  first: boolean
  last: boolean
  empty: boolean
}

export interface Content {
  name: string
  id: number
  thumbnail: string
}
