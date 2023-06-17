import { Metadata } from 'next'
import getMemes from '@/services/getMemes/getMemes'

import Header from '@/components/Header'
import MemeModule from '@/modules/Meme'

export const metadata: Metadata = {
  title: '짤리우드',
  description: '아이돌 짤 저장소',
}

export default async function Home() {
  return (
    <div>
      <Header />
      <MemeModule />
    </div>
  )
}


