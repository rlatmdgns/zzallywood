'use client'

import React from 'react'
import * as Styles from './styles'
import Link from 'next/link'

const Header = () => {
  return (
    <Styles.Header>
      <Styles.Title>
        <Link href="/">{process.env.NEXT_PUBLIC_SERVICE_TITLE}</Link>
      </Styles.Title>
      <Link href="/sign-in">로그인</Link>
    </Styles.Header>
  )
}

export default Header
