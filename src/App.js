import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Nav from '../src/components/bottomNav'
import Wedding from '../src/pages/wedding'
import About from './pages/about';
import Bparty from './pages/bparty';
import RSVP from './pages/rsvp';
import Hotel from './pages/hotel';
import Registry from './pages/registry';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact from="/" render={props => <Wedding {...props}/>} />
        <Route exact from="/aboutus" render={props => <About/>}/>
        <Route exact from="/bridalparty" render={props => <Bparty/>}/>
        <Route exact from="/rsvp" render={props => <RSVP/>}/>
        <Route exact from="/hotels" render={props => <Hotel {...props}/>}/>
        <Route exact from="/registry" render={props => <Registry {...props}/>}/>
      </Switch>
      <Nav/>
    </BrowserRouter>
    </>
  );
}

export default App;
