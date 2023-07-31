import React from 'react'
import getMembers from '@/services/getMembers'
import MemberList from '@/modules/MemberTab/MemberList'

interface MemberTabProps {
  id: string
}

const MemberTab = async ({ id }: MemberTabProps) => {
  const { content } = await getMembers(id)
  return <MemberList content={content} />
}
export default MemberTab
