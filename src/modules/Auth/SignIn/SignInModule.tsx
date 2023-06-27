'use client'
import React from 'react'
import * as Styles from './styles'

const SignInModule = () => {
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.Title>zzallywood</Styles.Title>
        <Styles.ButtonBox>
          <Styles.Button>카카오 로그인</Styles.Button>
          <Styles.Button>구글 로그인</Styles.Button>
        </Styles.ButtonBox>
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default SignInModule
