import React from 'react'

function Item({ name, thumbnail }) {
    return (
        <li className="item">
            <img className="item__thumb" src={ thumbnail } alt="artist-logo"/>
            <h3 className="item__name">{ name }</h3>
        </li>
    )
}

export default Item