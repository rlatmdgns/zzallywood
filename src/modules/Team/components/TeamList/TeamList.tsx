'use client'

import React from 'react'
import * as Styles from './styles'
import { Content } from '@/services/getTeam/getTeam.interface'
import TeamItem from '@/common/components/TeamItem'
import Link from 'next/link'
import { PAGE } from '@/constants/pages'

interface TeamListProps {
  content: Content[]
}

const TeamList = ({ content: teams }: TeamListProps) => {
  return (
    <Styles.Wrap>
      {teams?.map((team) => {
        return (
          <Link href={`${PAGE.TEAMS}/${team.id}`} key={team.id}>
            <TeamItem team={team} />
          </Link>
        )
      })}
    </Styles.Wrap>
  )
}

export default TeamList
