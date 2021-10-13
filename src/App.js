
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/home"><News key="home" category="general" /></Route>
            <Route exact path="/Business"><News key="business" category="business" /></Route>
            <Route exact path="/Entertainment"><News key="entertainment" category="entertainment" /></Route>
            <Route exact path="/General"><News key="general" category="general" /></Route>
            <Route exact path="/Health"><News key="health" category="health" /></Route>
            <Route exact path="/Science"><News key="science" category="science" /></Route>
            <Route exact path="/Sports"><News key="sports" category="sports" /></Route>
            <Route exact path="/Technology"><News key="technology" category="technology" /></Route>
          </Switch>

        </Router>

      </div>
    )
  }
}



