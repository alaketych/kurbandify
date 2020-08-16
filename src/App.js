import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Spinner, Head } from './components/index'

const Home = lazy(_ => import('./components/Home'))
const ArtistPage = lazy(_ => import('./components/ArtistPage'))

function App() {
  return (

        <div className="App">
          <Suspense fallback={ <Spinner>L O A D I N G . . .</Spinner> }>
            <BrowserRouter>
              <Head />

              <Switch>
                  <Home path='/' exact/>
                  <ArtistPage path='/artist/:id' />
              </Switch>

            </BrowserRouter>
          </Suspense>
        </div>
  );
}

export default App