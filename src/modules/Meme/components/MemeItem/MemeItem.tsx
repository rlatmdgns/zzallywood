'use client'

import * as Styles from './styles'
import Image from 'next/image'


interface MemeItemProps {
  id: number,
  filePath: string,
}

 
const MemeItem = ({
  id, filePath
}: MemeItemProps) => {
  return (
    <Styles.MemeItem>
      <Image src={`/${filePath}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt=""/>
        {id}
    </Styles.MemeItem>
  )
}

export default MemeItem
