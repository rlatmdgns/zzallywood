'use client'

import { Noto_Sans_KR } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import styled, { ThemeProvider } from 'styled-components'
import Themes from '@/styles/theme'
import { GlobalStyle } from '@/styles/globalStyle'
import { RecoilRoot } from 'recoil'

const notoSans = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  style: ['normal'],
  display: 'swap',
  subsets: ['latin'],
})

const Wrapper = styled.div`
  margin: 0 auto;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={Themes}>
            <GlobalStyle />
            <RecoilRoot>
              <Wrapper>{children}</Wrapper>
            </RecoilRoot>
          </ThemeProvider>
        </StyledComponentsRegistry>
        <div id="modal" />
      </body>
    </html>
  )
}
