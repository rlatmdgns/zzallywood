'use client'

import React from 'react'
import * as Styles from './styles'
import Link from 'next/link'

const Header = () => {
  return (
    <Styles.Header>
      <Styles.Title>
        <Link href="/">Zzallywood</Link>
      </Styles.Title>
    </Styles.Header>
  )
}

export default Header
