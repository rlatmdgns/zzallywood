'use client'
import React from 'react'
import Header from '@/common/components/Header'
import { useParams, useSearchParams } from 'next/navigation'
import MemberTab from '@/modules/MemberTab'
import EntireMeme from '@/modules/EntireMeme'
import MemberMemes from '@/modules/MemberMemes'

const TeamPage = () => {
  const { id } = useParams()
  const searchParams = useSearchParams()

  const memberId = searchParams.get('memberId')
  console.log(memberId)

  return (
    <div>
      <Header />
      <MemberTab id={id} />
      {memberId ? <MemberMemes memberId={memberId} /> : <EntireMeme />}
    </div>
  )
}

export default TeamPage
