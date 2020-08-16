import React from 'react'

import Drake from '../assets/images/drake.jpg'

function ArtistDescription() {
    return (
        <div className="info">
            <img className="logo" src={ Drake } alt="artist-logo"/>
            <h3 className="capture">Drake</h3>
            <h3 className="description">2 765 950 followers</h3>
        </div>
    )
}

export default ArtistDescription