import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Default from './Default'
import VideoController from './videoScrub/Controller'
import GodzillaController from './godzilla/Controller'


export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Default />
        </Route>
        <Route path='/video-scrub'>
          <VideoController />
        </Route>
        <Route path='/godzilla'>
          <GodzillaController />
        </Route>
      </Switch>
    </Router>
  )
}
