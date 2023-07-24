import { Metadata } from 'next'

import Header from '@/common/components/Header'
import NavigationModule from '@/common/components/Navigations'
import TeamModule from '@/modules/Team'
import EntireMeme from '@/modules/EntireMeme'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: '짤리우드',
  description: '아이돌 짤 저장소',
}

export default function Home() {
  return (
    <div>
      <Header />
      <Suspense fallback={<></>}>
        <TeamModule />
      </Suspense>
      <Suspense fallback={<></>}>
        <EntireMeme />
      </Suspense>
      <NavigationModule />
    </div>
  )
}
