import { Metadata } from 'next'
import React, { Suspense } from 'react'
import Header from '@/common/components/Header'
import MemberMemes from '@/modules/MemberMemes'
import NavigationModule from '@/common/components/Navigations'

export const metadata: Metadata = {
  title: '짤리우드',
  description: '아이돌 짤 저장소',
}

export default function Home() {
  return (
    <div>
      <Header />
      <MemberMemes/>
      <NavigationModule />
    </div>
  )
}
