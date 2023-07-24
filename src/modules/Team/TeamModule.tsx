import React from 'react'
import getTeams from '@/services/getTeam'
import TeamList from '@/modules/Team/components/TeamList'

const TeamModule = async () => {
  const { content } = await getTeams()
  return <TeamList content={content} />
}

export default TeamModule
