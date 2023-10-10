'use client'

import React from 'react'
import * as Styles from './styles'
import LoginBox from './components/LoginBox/LoginBox'
import Link from 'next/link'

const SignInModule = () => {
  const GOOGLE = process.env.NEXT_PUBLIC_GOOGLE_API

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.Title>로그인</Styles.Title>
        <LoginBox/>
        <Styles.MemberUtilWrap>
          <Link href="sign-up">회원가입</Link>
        </Styles.MemberUtilWrap>
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
