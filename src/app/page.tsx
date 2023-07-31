import { Metadata } from 'next'
import React, { Suspense } from 'react'
import TeamModule from '@/modules/Team'

export const metadata: Metadata = {
  title: '짤리우드',
  description: '아이돌 짤 저장소',
}

export default function Home() {
  return (
    <div>
      {/*<Header />*/}
      <Suspense fallback={<></>}>
        <TeamModule />
      </Suspense>
      {/*<EntireMeme />*/}
      {/*<NavigationModule />*/}
    </div>
  )
}
