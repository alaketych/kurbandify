import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Spinner, Head } from './components/index'

const Home = lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(
    () => import('./components/Home')
  )
})

const ArtistPage = lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(
    () => import('./components/ArtistPage')
  )
})

const AlbumPage = lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(
    () => import('./components/AlbumPage')
  )
})

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Head />

          <Suspense fallback={ <Spinner size="large" /> }>
            <Switch>
              <Route path="/" component={ Home } exact/>
              <Route path="/album/:id" component={ AlbumPage }/>
              <Route path="/artist/:id" component={ ArtistPage }/>
            </Switch>
          </Suspense>

        </BrowserRouter>
    </div>
  );
}

export default App