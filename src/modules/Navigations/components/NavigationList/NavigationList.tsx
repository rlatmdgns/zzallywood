'use client'

import React from 'react'
import * as Styles from './styles'
import NavigationItem from '../NavigationItem/NavigationItem'

interface NavigationItemProps {
  title: string,
  path: string,
}

interface navigationProps {
  navigations: NavigationItemProps[]
}

const NavigationList = ({ navigations }: navigationProps) => {
  const navigationItems = navigations.map(navItem => <NavigationItem title={navItem.title} path={navItem.path} key={navItem.title} />)

  return (
    <Styles.NavigationWrap>
      {navigationItems}
    </Styles.NavigationWrap>
  )
}

export default NavigationList
