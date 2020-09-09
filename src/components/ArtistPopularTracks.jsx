import React from 'react'
import { Track } from './index'

function ArtistPopularTracks() {
    return (
        <div className="popular">
            <h3 className="capture">Most popular tracks</h3>

            <ul className="list">
                <li className="track">
                    <Track />
                </li>

                <li className="track">
                    <Track />
                </li>

                <li className="track">
                    <Track />
                </li>
            </ul>
        </div>
    )
}

export default ArtistPopularTracks