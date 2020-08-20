import React from 'react'
import { Track } from './index'
import { faMusic } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ArtistPopularTracks() {
    return (
        <div className="popular">
            <h3 className="capture">Most popular tracks</h3>

            <ul className="list">
                <li className="track">
                    <FontAwesomeIcon icon={ faMusic }></FontAwesomeIcon>
                    <Track />
                </li>

                <li className="track">
                    <FontAwesomeIcon icon={ faMusic }></FontAwesomeIcon>
                    <Track />
                </li>

                <li className="track">
                    <FontAwesomeIcon icon={ faMusic }></FontAwesomeIcon>
                    <Track />
                </li>
            </ul>
        </div>
    )
}

export default ArtistPopularTracks