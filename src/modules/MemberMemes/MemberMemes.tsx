import React from 'react'
// import getMemesByMember from '@/services/getMemesByMember'
import CardList from '@/common/components/CardList'

interface MemberTabProps {
  memberId: string
}

const MemberMemes = async ({ memberId }: MemberTabProps) => {
  // const result = await getMemesByMember(memberId)
  // const memes = result.content[0].memes

  // Fake Dummy
  const memes = [
    {
      id: 1,
      memberId: 11,
      createdBy: '2002-01-01',
      image: 'test',
      createdAt: '2002-01-01',
    }
  ]

  return <CardList memes={memes} />
}

export default MemberMemes
