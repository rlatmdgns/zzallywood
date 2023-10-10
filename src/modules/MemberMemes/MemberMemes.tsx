import React from 'react'
// import getMemesByMember from '@/services/getMemesByMember'
import CardList from '@/common/components/CardList'

interface MemberTabProps {
  memberId: string
}

const RankingStarMemes = async () => {
  // const result = await getMemesByMember(memberId)
  // const memes = result.content[0].memes

  // Fake Dummy
  const memes = [
    {
      id: 1,
      memberId: 11,
      image: 'img url',
      title : '타이틀',
      rankingAmt : 200,
      createdAt: '2002-01-01',
    }
  ]

  return <CardList memes={memes} />
}

export default RankingStarMemes