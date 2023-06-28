'use client'

import { Metadata } from 'next'
import { useState } from 'react'

import Header from '@/components/Header'
import MainContainer from '@/components/Main/MainContainer'
import Modal from '@/modules/Modal/components/Modal'
import MemeItem from '@/modules/Meme/components/MemeItem/MemeItem'

export const metadata: Metadata = {
  title: '짤리우드',
  description: '아이돌 짤 저장소',
}

export default async function Home() {
  const [modalStatus, setModalStatus] = useState(false)

  return (
    <div>
      <Header />
      <MainContainer />
      {
        modalStatus ? <Modal
        title="테스트"
      >
        <MemeItem 
          id={1}
          filePath='test'
        />
      </Modal> : null
      }
    </div>
  )
}
