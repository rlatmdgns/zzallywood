import React, { useState } from 'react'

interface Meme {
    id: number,
    filePath: string,
    creator: string,
    editor: string,
    created: string,
    edited: string
}
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
