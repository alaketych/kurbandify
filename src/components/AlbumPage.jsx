import React from 'react'
import '../sass/components/page.sass'

import Drake from '../assets/images/drake.jpg'
import Track from './Track'

import { faMusic } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ArtistPage() {
    return (
        <div className="page">
            <div className="wrapper">
                <div className="head">
                    <div className="info">
                        <img className="logo" src={ Drake } alt="artist-logo"/>
                        <h3 className="capture">Drake</h3>

                        <div className="enum">
                            <h3 className="title">25 songs</h3>
                            <h3 className="description">2018</h3>
                        </div>
                    </div>

                    <div className="popular">
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
                </div>
            </div>
        </div>
    )
}

export default ArtistPage