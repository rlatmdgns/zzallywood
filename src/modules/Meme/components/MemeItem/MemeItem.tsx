'use client'

import React from 'react'
import * as Styles from './styles'
import Link from 'next/link'

interface MemeItemProps {
  id: number
  filePath: string
}

const MemeItem = ({ id, filePath }: MemeItemProps) => {
  return (
    <Styles.MemeItem>
      <Styles.MemeItemImage
        style={{ backgroundImage: filePath }}
      ></Styles.MemeItemImage>
      {id}
    </Styles.MemeItem>
  )
}

export default MemeItem
