import React from 'react'
import Idol from '@/modules/components/Idol'
import { HomeView } from '@/services/getHome/getHome.interface'

interface IdolListProps {
  idols: HomeView[]
}

const IdolList = ({ idols }: IdolListProps) => {
  return (
    <>
      {idols.map(({ idolView, memeViews }) => (
        <Idol key={idolView.id} idolView={idolView} memeViews={memeViews} />
      ))}
    </>
  )
}

export default IdolList
