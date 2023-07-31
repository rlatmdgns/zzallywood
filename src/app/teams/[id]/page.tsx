import React from 'react'
import Header from '@/common/components/Header'
import MemberTab from '@/modules/MemberTab'
import TeamMemes from '@/app/teams/components/TeamMemes'

const TeamPage = ({ params, searchParams }: any) => {
  const { id } = params
  const memberId = searchParams?.memberId
  return (
    <div>
      <Header />
      <MemberTab id={id} />
      <TeamMemes memberId={memberId} />
    </div>
  )
}

export default TeamPage
