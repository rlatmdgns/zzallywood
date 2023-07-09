'use client'

import { Noto_Sans_KR } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { ThemeProvider } from 'styled-components'
import Themes from '@/styles/theme'
import { GlobalStyle } from '@/styles/globalStyle'
import NavigationModule from '@/modules/Navigations'

const notoSans = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  style: ['normal'],
  display: 'swap',
  subsets: ['latin'],
})

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
            {children}
            <NavigationModule />
          </ThemeProvider>
        </StyledComponentsRegistry>
        <div id="modal"/>
      </body>
    </html>
  )
}
