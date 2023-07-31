import React from 'react'
import CardList from '@/common/components/CardList'
import { Meme } from '@/services/getMemes/getMemes.interface'

interface EntireMemListProps {
  memes: Meme[]
}

const EntireMemList = ({ memes }: EntireMemListProps) => {
  return <CardList memes={memes} />
}

export default EntireMemList
