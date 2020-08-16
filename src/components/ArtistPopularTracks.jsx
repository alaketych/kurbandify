import React from 'react'
import { faMusic } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ArtistPopularTracks() {
    return (
        <div className="popular">
            <h3 className="capture">Most popular tracks</h3>

            <ul className="list">
                <li className="track">
                    <FontAwesomeIcon icon={ faMusic }></FontAwesomeIcon>

                    <div className="track__info">
                        <h3 className="track__name">In My Feelings</h3>
                        <h3 className="track__artist">Drake</h3>
                    </div>
                </li>

                <li className="track">
                    <FontAwesomeIcon icon={ faMusic }></FontAwesomeIcon>

                    <div className="track__info">
                        <h3 className="track__name">In My Feelings</h3>
                        <h3 className="track__artist">Drake</h3>
                    </div>
                </li>

                <li className="track">
                    <FontAwesomeIcon icon={ faMusic }></FontAwesomeIcon>

                    <div className="track__info">
                        <h3 className="track__name">In My Feelings</h3>
                        <h3 className="track__artist">Drake</h3>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ArtistPopularTracks