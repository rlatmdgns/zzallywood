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

interface Meme {
  id: number
  image: string
}

interface Member {
  name: string
  id: number
  thumbnail: string
}

interface Content {
  name: string
  id: number
  members: Member[]
  thumbnail: string
  memes: Meme[]
}

interface Sort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

interface Pageable {
  offset: number
  sort: Sort
  pageNumber: number
  pageSize: number
  paged: boolean
  unpaged: boolean
}
