'use client'

import React from 'react'
import * as Styles from './styles'
import LoginBox from './components/LoginBox/LoginBox'

const SignInModule = () => {
  const GOOGLE = process.env.NEXT_PUBLIC_GOOGLE_API
  const SERVICE_NAME = process.env.NEXT_PUBLIC_SERVICE_TITLE

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.Title>{SERVICE_NAME}</Styles.Title>
        <LoginBox/>
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
