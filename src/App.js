import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Head, List } from './components/index'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Head />

        <Switch>
            <List />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App