'use client'

import React from 'react'
import * as Styles from './styles'
import { Meme } from '@/services/getMemes/getMemes.interface'
import Image from 'next/image'

interface CardProps {
  meme: Meme
}

const Card = ({ meme }: CardProps) => {
  return <Styles.Wrapper>
    <Styles.RankingNumber>{meme.id}</Styles.RankingNumber>
    <Styles.RankingStarImageWrapper>
      <Image
        src={`/${meme.image}`}
        fill={true}
        alt=""
      />
    </Styles.RankingStarImageWrapper>
    <Styles.RankingInfomation>
      <Styles.RankingTitle>{meme.title}</Styles.RankingTitle>
      <Styles.RankingPoint>{meme.rankingAmt}</Styles.RankingPoint>
    </Styles.RankingInfomation>
  </Styles.Wrapper>
}

export default Card
