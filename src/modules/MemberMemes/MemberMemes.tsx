import React from 'react'
import getMemesByMember from '@/services/getMemesByMember'
import CardList from '@/common/components/CardList'

interface MemberTabProps {
  memberId: string
}

const MemberMemes = async ({ memberId }: MemberTabProps) => {
  const result = await getMemesByMember(memberId)
  const memes = result.content[0].memes
  return <CardList memes={memes} />
}

export default MemberMemes
