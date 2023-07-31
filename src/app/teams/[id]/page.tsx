import React from 'react'
import Header from '@/common/components/Header'
import MemberTab from '@/modules/MemberTab'

const TeamPage = ({ params, searchParams }: any) => {
  const { id } = params
  // const { memberId } = searchParams

  return (
    <div>
      <Header />
      <MemberTab id={id} />
      {/*{memberId ? <MemberMemes memberId={memberId} /> : <EntireMeme />}*/}
    </div>
  )
}

export default TeamPage
