'use client'

import React from 'react'
import { Meme } from '@/services/getMemes/getMemes.interface'
import Card from '@/components/Card'
import * as Styles from './styles'

interface MemeListProps {
  memes: Meme[]
}

const CardList = ({ memes }: MemeListProps) => {
  return (
    <Styles.Wrapper>
      {memes.map((meme) => (
        <Card key={meme.id} src={''} />
      ))}
    </Styles.Wrapper>
  )
}

export default CardList
