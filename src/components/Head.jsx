import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

function Head() {
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="logo">
                    <img className="logo__capture" src={logo} alt="kurbandify-logo"></img>
                    <h1 className="logo__name">kurbandify</h1>
                </div>
            </Link>
        </div>
    )
}

export default Head