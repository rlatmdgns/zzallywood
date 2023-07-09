'use client'

import Link from 'next/link'
import * as Styles from './styles'

interface NavigationItemProps {
  title: string
  path: string
  type: string
}

const uploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
  console.log(event)
}

const NavigationItem = ({ title, path, type }: NavigationItemProps) => {
  return (
    <Styles.NavigationItem>
      {type === 'link' ?
        <Link href={`/${path}`}>
          <Styles.NavigationText>{title}</Styles.NavigationText>
        </Link> :
        <Styles.UploadButtonWrap>
          <Styles.UploadInput id="upload_btn" type="file" onChange={uploadImage} />
          <Styles.UploadButton htmlFor="upload_btn">{title}</Styles.UploadButton>
        </Styles.UploadButtonWrap>
      }
    </Styles.NavigationItem >
  )
}

export default NavigationItem
