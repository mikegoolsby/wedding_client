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
import Search from './pages/search';

function App() {

  const url = "https://goolsby-wedding-api.herokuapp.com"

  // eslint-disable-next-line
  const [rsvpNode, setRsvpNode] = React.useState([])
  const [listHeadNode, setListHeadNode] = React.useState([])
  const [funToDo, setFunToDo] = React.useState([])

  // eslint-disable-next-line
  const emptyNode = {
    first_name: "",
    last_name: "",
    attending: null,
    food: "",
    song: ""
  }

  const getListHead = async () => {
    const response = await fetch(url + '/guestlist')
    const data = await response.json()
    setListHeadNode(data)
  }

  React.useEffect(() => getListHead(), []);

  const getFunThings = async () => {
    const response = await fetch(url + '/thingstodo')
    const data = await response.json()
    setFunToDo(data)
  }

  React.useEffect(() => getFunThings(), [])


  const getNode = () => {
    fetch(url + "/rsvp")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      setRsvpNode(data)
    })
  }


  React.useEffect(() => getNode(), []);

  const handleCreate = (newRsvp) => {
    fetch(url + "/rsvp", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRsvp),
    }).then((response) => response.json())
  }

  const handleUpdate = (rsvpNode) => {
    fetch(url + "/rsvp/" + rsvpNode._id, {
      method: "put",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(rsvpNode)
    })
    .then(response => getNode())
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
        <Route exact from="/hotels" render={(rp => <Hotel {...rp} toDo={funToDo}/>)}/>
        <Route exact from="/registry" render={props => <Registry {...props}/>}/>
        <Route exact from="/success" render={props => <Success {...props}/>}/>
        <Route exact from="/search" render={(rp => <Search {...rp} listHead={listHeadNode} handleUpdate={handleUpdate}/>)}/>
      </Switch>
      <Nav/>
    </BrowserRouter>
    </>
  );
}

export default App;
