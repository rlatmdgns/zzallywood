import { Meme } from '@/services/getMemes/getMemes.interface'
import { Pagination } from '@/common/interface/page'
import { TeamContent } from '@/services/getTeam/getTeam.interface'

export interface MemesByMember extends Pagination {
  content: MemberContent[]
}

interface MemberContent extends TeamContent {
  memes: Meme[]
}
