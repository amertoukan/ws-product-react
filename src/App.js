import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Events from './pages/Events';
import Stats from './pages/Stats';
import POI from './pages/POI';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Nav, NavItem,  } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props); 

    this.state = {
      anchorEl : false, 
    }
   
  }


  render(){
  return (
    <Router>
      
       
       <Nav
       activeKey = "/events"
     
       >
        <NavItem>
        <Nav.Link href="/">Home</Nav.Link>
        </NavItem>
        <NavItem>
        <Nav.Link eventKey = "events" href="/events">Events</Nav.Link>
        </NavItem>
        <NavItem>
        <Nav.Link eventKey = "stats" href="/stats">Stats</Nav.Link>
        </NavItem>
        <NavItem>
        <Nav.Link eventKey = "poi" href="/poi">POI</Nav.Link>
        </NavItem>

     </Nav>
      
    
         <Switch>
       <Route exact path = "/" component={Home} />
       <Route path = "/events" component={Events}/>
       <Route path = "/stats" component={Stats} />
       <Route path = "/poi" component={POI} />
       </Switch>
       </Router>
       
  );
}
}

export default App;
