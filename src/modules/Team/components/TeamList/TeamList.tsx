'use client'

import React from 'react'
import * as Styles from './styles'
import TeamItem from '@/modules/Team/components/TeamItem'
import { Content } from '@/services/getTeam/getTeam.interface'

interface TeamListProps {
  content: Content[]
}

const TeamList = ({ content: teams }: TeamListProps) => {
  return (
    <Styles.Wrap>
      {teams?.map((team) => (
        <TeamItem key={team.id} team={team} />
      ))}
    </Styles.Wrap>
  )
}

export default TeamList
