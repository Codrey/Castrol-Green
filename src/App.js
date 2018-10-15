import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Route, BrowserRouter } from 'react-router-dom'

import Intro from './components/Intro';
import FleetInput from './components/fleetinput/FleetInput';
import Results from './components/results/Results';
import Summary from './components/summary/Summary';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={Intro}/>
          <Route path='/fleetinput' component={FleetInput}/>
          <Route path='/results' component={Results} />
          <Route path='/summary' component={Summary}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

