'use client'

import Link from 'next/link'
import * as Styles from './styles'
import Upload from '../../../Upload/index'

interface NavigationItemProps {
  title: string
  path: string
  type: string
}


const NavigationItem = ({ title, path, type }: NavigationItemProps) => {
  return (
    <Styles.NavigationItem>
      {type === 'link' ?
        <Link href={`/${path}`}>
          <Styles.NavigationText>{title}</Styles.NavigationText>
        </Link> :
        <Upload />
      }
    </Styles.NavigationItem >
  )
}

export default NavigationItem
