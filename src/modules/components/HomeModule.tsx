'use client'

import React from 'react'
import IdolList from '@/modules/components/IdolList'
import getHome from '@/services/getHome'

const HomeModule = async () => {
  const idols = await getHome()
  return <IdolList idols={idols} />
}

export default HomeModule
