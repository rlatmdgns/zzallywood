'use client'
import React from 'react'
import Header from '@/common/components/Header'
import { useParams, useSearchParams } from 'next/navigation'

const TeamPage = () => {
  const { id } = useParams()
  const searchParams = useSearchParams()
  const memberId = searchParams.get('memberId')

  return (
    <div>
      <Header />
      {/*<MemberTab id={id} />*/}
      {/*<Suspense fallback={<>...</>}>*/}
      {/*  {memberId ? <MemberMemes memberId={memberId} /> : <EntireMeme />}*/}
      {/*</Suspense>*/}
    </div>
  )
}

export default TeamPage
