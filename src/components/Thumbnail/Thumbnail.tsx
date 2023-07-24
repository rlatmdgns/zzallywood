import React from 'react'
import * as Styles from './styles'
import Image from 'next/image'

interface ThumbnailProps {
  src: string
  alt: string
  size: number
}

const Thumbnail = ({ src, alt = '썸네일', size }: ThumbnailProps) => {
  return (
    <Styles.Wrapper>
      <Image src={src} alt={alt} width={size} height={size} />
    </Styles.Wrapper>
  )
}

export default Thumbnail
