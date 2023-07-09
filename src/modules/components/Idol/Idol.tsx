import React from 'react'
import MemeList from '@/components/MemeList'
import * as Styles from './styles'
import { Idols } from '@/services/getIdols/Idols.interface'
import { Meme } from '@/services/getMemes/getMemes.interface'

interface IdolProps {
  idolView: Idols
  memeViews: Meme[]
}

const Idol = ({ idolView, memeViews }: IdolProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Name>{idolView.name}</Styles.Name>
      <MemeList memes={memeViews} />
    </Styles.Wrapper>
  )
}

export default Idol
