import React, { Fragment } from 'react'

import { faMusic } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Track({artist="Drake", name="In My Feelings"}) {
    return (
        <Fragment>
            <FontAwesomeIcon icon={ faMusic }></FontAwesomeIcon>

            <div className="track__info">
                <h3 className="track__name">{ name }</h3>
                <h3 className="track__artist">{ artist }</h3>
            </div>
        </Fragment>
    )
}

export default Track