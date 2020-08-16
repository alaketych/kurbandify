import React from 'react'
import { SingleAlbum } from './index'

function Albums() {
    return (
        <div className="albums">
            <h3 className="capture">Albums</h3>

            <div className="list">
                <SingleAlbum />
                <SingleAlbum />
                <SingleAlbum />
                <SingleAlbum />
                <SingleAlbum />
                <SingleAlbum />
            </div>
        </div>
    )
}

export default Albums