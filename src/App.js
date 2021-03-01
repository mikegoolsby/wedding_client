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
import Success from './pages/success';

function App() {

  const url = "https://goolsby-wedding-api.herokuapp.com"

  const handleCreate = (newRsvp) => {
    fetch(url + "/rsvp", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRsvp),
    }).then((response) => response.json())
  }

  const emptyRsvp = {
    first_name: '',
    last_name: '',
    attending: null,
    food: '',
    song: ''
  }

  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact from="/" render={props => <Wedding {...props}/>} />
        <Route exact from="/aboutus" render={props => <About/>}/>
        <Route exact from="/bridalparty" render={props => <Bparty/>}/>
        <Route exact from="/rsvp" render={(rp) => <RSVP {...rp} init={emptyRsvp} handleSubmit={handleCreate}/>}/>
        <Route exact from="/hotels" render={props => <Hotel {...props}/>}/>
        <Route exact from="/registry" render={props => <Registry {...props}/>}/>
        <Route exact from="/success" render={props => <Success {...props}/>}/>
      </Switch>
      <Nav/>
    </BrowserRouter>
    </>
  );
}

export default App;
