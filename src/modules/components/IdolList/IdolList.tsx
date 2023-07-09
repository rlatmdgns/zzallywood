import React from 'react'
import Idol from '@/modules/components/Idol'

const IdolList = ({ idols }) => {
  return (
    <>
      {idols.map(({ idolView, memeViews }) => (
        <Idol key={idolView.id} idolView={idolView} memeViews={memeViews} />
      ))}
    </>
  )
}

export default IdolList
