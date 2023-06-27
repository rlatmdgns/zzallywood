'use client'

import Link from 'next/link'
import * as Styles from './styles'

interface NavigationItemProps {
    title: string,
    path: string,
}

const NavigationItem = ({ title, path }: NavigationItemProps) => {
    return (
        <Styles.NavigationItem>
            <Link href={`/${path}`}>
              <Styles.NavigationText>
              {title}
            </Styles.NavigationText>
            </Link>
        </Styles.NavigationItem>
    )
}

export default NavigationItem