import { Metadata } from 'next'

import Header from '@/components/Header'
import NavigationModule from '@/components/Navigations'
import TeamModule from '@/modules/Team'
import EntireMeme from '@/modules/EntireMeme'

export const metadata: Metadata = {
  title: '짤리우드',
  description: '아이돌 짤 저장소',
}

export default function Home() {
  return (
    <div>
      <Header />
      <TeamModule />
      <EntireMeme />
      <NavigationModule />
    </div>
  )
}
