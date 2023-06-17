import React, { useState } from 'react'
import { Meme } from '@/services/getMemes/getMemes.interface'

interface MemeListProps {
    memes: Meme[]
}

const MemeList = ({
    memes
}: MemeListProps) => {
    return (
        <section>
            <h3>아이돌 명</h3>
            <ul>
                {memes.map(photo => <li key={photo.id}>
                    <button type="button">
                        {photo.id}
                    </button>
                </li>)}
            </ul>
        </section>
    )
}
//     lists: Array<Memes>,
// }) => {
//     
// }

export default MemeList
