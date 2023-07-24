'use client'

import React from 'react'
import * as Styles from './styles'
import { TeamContent } from '@/services/getTeam/getTeam.interface'

interface TeamItemProps {
  team: TeamContent
}

const TeamItem = ({ team }: TeamItemProps) => {
  return (
    <Styles.Item>
      {/*<Thumbnail src={'/'} alt={team.name} size={56} />*/}
      {team.name}
    </Styles.Item>
  )
}

export default TeamItem
