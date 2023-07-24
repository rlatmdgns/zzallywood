'use client'

import React from 'react'
import * as Styles from './styles'
import TeamItem from '@/common/components/TeamItem'
import Link from 'next/link'
import { TeamContent } from '@/services/getTeam/getTeam.interface'

interface MemberListProps {
  content: TeamContent[]
}

const MemberList = ({ content: members }: MemberListProps) => {
  return (
    <Styles.Wrap>
      {members?.map((member) => {
        return (
          <Link
            prefetch
            href={`?memberId=${member.id}`}
            key={member.id}
            replace={true}
          >
            <TeamItem team={member} />
          </Link>
        )
      })}
    </Styles.Wrap>
  )
}

export default MemberList
