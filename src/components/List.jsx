import React from 'react'
import { Item } from './index'
import Drake from '../assets/images/drake.jpg'

function List() {
    return (
      <main className="main-content">
        <ul className="list">
          <Item thumbnail={ Drake } name="Drake" />
          <Item thumbnail={ Drake } name="Drake"/>
          <Item thumbnail={ Drake } name="Drake"/>
          <Item thumbnail={ Drake } name="Drake"/>
        </ul>
      </main>
    )
}

export default List