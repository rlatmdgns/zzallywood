import { Metadata } from 'next'

import Header from '@/components/Header'
import NavigationModule from '@/components/Navigations'
import HomeModule from '@/modules/components'

export const metadata: Metadata = {
  title: '짤리우드',
  description: '아이돌 짤 저장소',
}

export default async function Home() {

  return (
    <div>
      <Header />
      <HomeModule />
      <NavigationModule />
    </div>
  )
}
