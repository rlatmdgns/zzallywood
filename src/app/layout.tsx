'use client'

import { Noto_Sans_KR } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyle } from '@/stlyes/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Themes from '@/stlyes/theme'

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
        <GlobalStyle/>
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
    </body>
    </html>
  )
}
