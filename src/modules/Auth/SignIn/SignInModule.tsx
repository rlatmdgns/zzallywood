'use client'
import React from 'react'
import * as Styles from './styles'

const SignInModule = () => {
  const GOOGLE = process.env.NEXT_PUBLIC_GOOGLE_API

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.Title>zzallywood</Styles.Title>
        <Styles.ButtonBox>
          <Styles.GoogleSignLink href={GOOGLE}>
            Google 로그인
          </Styles.GoogleSignLink>
        </Styles.ButtonBox>
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default SignInModule
