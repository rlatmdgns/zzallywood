'use client'

import React from 'react'
import getHome from '@/services/getHome'
import IdolList from '@/modules/components/IdolList'

const HomeModule = async () => {
  const { homeViews } = await getHome()
  return <IdolList idols={homeViews} />
}

export default HomeModule
