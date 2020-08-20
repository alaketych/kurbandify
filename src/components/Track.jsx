import React from 'react'

function Track({artist="Drake", name="In My Feelings"}) {
    return (
        <div className="track__info">
            <h3 className="track__name">{ name }</h3>
            <h3 className="track__artist">{ artist }</h3>
        </div>
    )
}

export default Track