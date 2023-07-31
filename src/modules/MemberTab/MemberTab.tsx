'use client'
import React from 'react'
import { API_URL } from '@/constants/apiUrl'

interface MemberTabProps {
  id: string
}

const MemberTab = async ({ id }: MemberTabProps) => {
  const { content } = await getMembers(id)
  console.log(content)
  return <div></div>
}

const getMembers = async (id) => {
  const res = await fetch(API_URL.TEAM_MEMBERS(id))
  return res.json()
}

export default MemberTab
