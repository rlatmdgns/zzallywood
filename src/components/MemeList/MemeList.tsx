'use client'

import React from 'react'
import { Meme } from '@/services/getMemes/getMemes.interface'
import MemeItem from '../MemeItem/MemeItem'
import * as Styles from './styles'

interface MemeListProps {
  memes: Meme[]
}

const MemeList = ({ memes }: MemeListProps) => {
  return (
    <Styles.MemeListWrap>
      {memes?.map((meme) => (
        <Styles.MemeList key={meme.id}>
          <MemeItem filePath={meme.filePath} />
        </Styles.MemeList>
      ))}
    </Styles.MemeListWrap>
  )
}

export default MemeList
