'use client'

import React from 'react'
import * as Styles from './styles'
import { Content } from '@/services/getTeam/getTeam.interface'
import TeamItem from '@/common/components/TeamItem'
import Link from 'next/link'

interface MemberListProps {
  content: Content[]
}

const MemberList = ({ content: members }: MemberListProps) => {
  return (
    <Styles.Wrap>
      {members?.map((member) => {
        return (
          <Link href={`?memberId=${member.id}`} key={member.id} replace={true}>
            <TeamItem team={member} />
          </Link>
        )
      })}
    </Styles.Wrap>
  )
}

export default MemberList
