import React from 'react'
import getMemes from '@/services/getMemes'
import EntireMemList from '@/modules/EntireMeme/components/EntireMemList/EntireMemList'

const EntireMeme = async () => {
  const result = await getMemes()
  return <EntireMemList memes={result.content} />
}

export default EntireMeme
