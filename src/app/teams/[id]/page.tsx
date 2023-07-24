'use client'
import React, { Suspense } from 'react'
import Header from '@/common/components/Header'
import { useParams, useSearchParams } from 'next/navigation'
import MemberTab from '@/modules/MemberTab'
import EntireMeme from '@/modules/EntireMeme'
import MemberMemes from '@/modules/MemberMemes'

const TeamPage = () => {
  const { id } = useParams()
  const searchParams = useSearchParams()
  const memberId = searchParams.get('memberId')

  return (
    <div>
      <Header />
      <Suspense fallback={<>...</>}>
        <MemberTab id={id} />
      </Suspense>
      <Suspense fallback={<>...</>}>
        {memberId ? <MemberMemes memberId={memberId} /> : <EntireMeme />}
      </Suspense>
    </div>
  )
}

export default TeamPage
