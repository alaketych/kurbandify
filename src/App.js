import React from 'react'
import logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img className="header__logo" src={logo} alt="kurbandify-logo"></img>
          <h1 className="header__name">kurbandify</h1>
        </div>
      </header>
    </div>
  );
}

export default App