import React from 'react'
import { AlbumPreview } from './index'

function Albums() {
    return (
        <div className="albums">
            <h3 className="capture">Albums</h3>

            <div className="list">
                <AlbumPreview />
                <AlbumPreview />
                <AlbumPreview />
                <AlbumPreview />
                <AlbumPreview />
                <AlbumPreview />
            </div>
        </div>
    )
}

export default Albums