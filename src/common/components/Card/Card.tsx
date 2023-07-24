'use client'

import React from 'react'
import * as Styles from './styles'
import { Meme } from '@/services/getMemes/getMemes.interface'

interface CardProps {
  meme: Meme
}

const Card = ({ meme }: CardProps) => {
  return <Styles.Wrapper>{meme.id}</Styles.Wrapper>
}

export default Card
