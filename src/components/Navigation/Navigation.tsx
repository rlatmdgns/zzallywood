'use client'

import React from 'react'
import * as Styles from './styles'

interface NavList  {
  title : string,
  path : string,
  type : string
}

const navigationList : Array<NavList> = [
  {
    title : 'home',
    path : '/',
    type : 'link'
  },
  {
    title : 'upload',
    path : '',
    type : 'button'
  },
  {
    title : 'mypage',
    path : 'mypage',
    type : 'link'
  }
]

const Navigation = () => {
  return (
    <Styles.Navigation>
      {navigationList.map(nav => 
        <Styles.NavigationItem key={nav.title}>
          {nav.title}
        </Styles.NavigationItem>
      )}
    </Styles.Navigation>
  )
}

export default Navigation
