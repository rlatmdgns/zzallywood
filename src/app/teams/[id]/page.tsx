'use client'
import React from 'react'
import Header from '@/common/components/Header'
import { useParams, useSearchParams } from 'next/navigation'
import MemberTab from '@/modules/MemberTab'
import getMembers from '@/services/getMembers'

const TeamPage = async () => {
  const { id } = useParams()
  const searchParams = useSearchParams()
  const memberId = searchParams.get('memberId')
  const { content } = await getMembers(id)
  console.log(content)
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
