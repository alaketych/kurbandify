import React from 'react'
import { Artist } from './index'
import Drake from '../assets/images/drake.jpg'

function Home() {
    return (
      <main className="main-content">
        <ul className="list">
          <Artist thumbnail={ Drake } name="Drake" />
          <Artist thumbnail={ Drake } name="Drake" />
          <Artist thumbnail={ Drake } name="Drake" />
          <Artist thumbnail={ Drake } name="Drake" />
        </ul>
      </main>
    )
}

export default Home