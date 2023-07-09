'use client'

import React from 'react'
import * as Styles from './styles'

interface MemeItemProps {
  filePath: string
}

const MemeItem = ({ filePath }: MemeItemProps) => {
  return (
    <Styles.MemeItem>
      <Styles.MemeItemImage
        style={{ backgroundImage: filePath }}
      ></Styles.MemeItemImage>
    </Styles.MemeItem>
  )
}

export default MemeItem
