import React from 'react'
import '../sass/components/page.sass'
import { Albums, ArtistDescription, ArtistPopularTracks } from './index'

function ArtistPage() {
    return (
        <div className="page">
            <div className="wrapper">
                <div className="head">
                    <ArtistDescription />
                    <ArtistPopularTracks />
                </div>

                <Albums />
            </div>
        </div>
    )
}

export default ArtistPage