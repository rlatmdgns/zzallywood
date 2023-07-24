'use client'

import React from 'react'
import * as Styles from './styles'
import { Content } from '@/services/getTeam/getTeam.interface'
import Thumbnail from '@/common/components/Thumbnail/Thumbnail'

interface TeamItemProps {
  team: Content
}

const TeamItem = ({ team }: TeamItemProps) => {
  return (
    <Styles.Item>
      <Thumbnail src={team.thumbnail} alt={team.name} size={56} />
      {team.name}
    </Styles.Item>
  )
}

export default TeamItem
