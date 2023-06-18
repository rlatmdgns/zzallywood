'use client'
import React from 'react'
import * as Styles from './styles'

interface MemeItemProps {
    id: number,
    filePath: string,
}

const MemeItem = ({
    id, filePath
}: MemeItemProps) => {
    return (
        <Styles.MemeItem type="button">
            <Styles.MemeItemImage style={{backgroundImage: filePath}}></Styles.MemeItemImage>
            {id}
        </Styles.MemeItem>
    )
}

export default MemeItem
