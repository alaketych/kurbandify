import React from 'react'
import Drake from '../assets/images/drake.jpg'

function AlbumPreview() {
    return (
        <div className="item">
            <img className="album-thumb" src={ Drake } alt="album"/>
            <h3 className="capture">In My Feelings</h3>

            <div className="enum">
                <h3 className="title">25 songs</h3>
                <h3 className="description">2018</h3>
            </div>
        </div>
    )
}

export default AlbumPreview