'use client'

import React from 'react'
import CardList from '@/common/components/CardList'
import { Meme } from '@/services/getMemes/getMemes.interface'
import * as Styles from './styles'

interface EntireMemListProps {
  memes: Meme[]
}

const EntireMemList = ({ memes }: EntireMemListProps) => {
  return (
    <Styles.Wrapper>
      <CardList memes={memes} />
    </Styles.Wrapper>
  )
}

export default EntireMemList
