import React from 'react'
import Header from '@/common/components/Header'
import MemberTab from '@/modules/MemberTab'

const TeamPage = ({ params }: any) => {
  const { id } = params
  console.log(id)
  return (
    <div>
      <Header />
      <MemberTab id={id} />
      {/*<Suspense fallback={<>...</>}>*/}
      {/*  {memberId ? <MemberMemes memberId={memberId} /> : <EntireMeme />}*/}
      {/*</Suspense>*/}
    </div>
  )
}

export default TeamPage
