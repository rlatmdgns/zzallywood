import React from 'react'
import getTeam from '@/services/getTeam'

const TeamModule = async () => {
  const result = await getTeam()
  console.log(result)
  return <div>1</div>
}

export default TeamModule
