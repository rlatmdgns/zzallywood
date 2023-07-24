export interface Pagination {
  pageable: Pageable
  size: number
  number: number
  sort: Sort
  numberOfElements: number
  first: boolean
  last: boolean
  empty: boolean
}

export interface Pageable {
  offset: number
  sort: Sort
  pageNumber: number
  pageSize: number
  paged: boolean
  unpaged: boolean
}

export interface Sort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}
