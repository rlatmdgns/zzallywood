import React from 'react'
import EntireMeme from '@/modules/EntireMeme'
import MemberMemes from '@/modules/MemberMemes'

interface TeamMemesProps {
  memberId?: string
}

const TeamMemes = ({ memberId }: TeamMemesProps) => {
  if (!memberId) {
    return <EntireMeme />
  }
  return <MemberMemes memberId={memberId} />
}

export default TeamMemes
