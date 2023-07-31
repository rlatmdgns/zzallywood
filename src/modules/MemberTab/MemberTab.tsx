import React from 'react'
import getMembers from '@/services/getMembers'

interface MemberTabProps {
  id: string
}

const MemberTab = async ({ id }: MemberTabProps) => {
  const { content } = await getMembers(id)
  console.log(content)
  return <div></div>
}

export default MemberTab
