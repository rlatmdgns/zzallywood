'use client'

import React from 'react'
import { Meme } from '@/services/getMemes/getMemes.interface'
import MemeItem from '../MemeItem/MemeItem'
import * as Styles from './styles'


interface MemeListProps {
  memes: Meme[]
}


const MemeList = ({
  memes
}: MemeListProps) => {
  return (
    <Styles.MemeSection>
      <Styles.MemeTitle>아이돌 명</Styles.MemeTitle>
      <Styles.MemeListWrap>
        {memes.map(photo => <Styles.MemeList key={photo.id}>
          <MemeItem id={photo.id} filePath={photo.filePath}/>
        </Styles.MemeList>)}
      </Styles.MemeListWrap>
    </Styles.MemeSection>
  )
}

export default MemeList
