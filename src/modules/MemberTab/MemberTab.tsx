import React, { use } from 'react'
import getMembers from '@/services/getMembers'

interface MemberTabProps {
  id: string
}

const MemberTab = async ({ id }: MemberTabProps) => {
  const { content } = use(getMembers(id))
  console.log(use)
  return <div></div>
}

export default MemberTab
