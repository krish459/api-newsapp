
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={4}
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/home"><News setProgress={this.setProgress} key="home" category="general" /></Route>
            <Route exact path="/Business"><News setProgress={this.setProgress} key="business" category="business" /></Route>
            <Route exact path="/Entertainment"><News setProgress={this.setProgress} key="entertainment" category="entertainment" /></Route>
            <Route exact path="/General"><News  setProgress={this.setProgress} key="general" category="general" /></Route>
            <Route exact path="/Health"><News setProgress={this.setProgress} key="health" category="health" /></Route>
            <Route exact path="/Science"><News setProgress={this.setProgress} key="science" category="science" /></Route>
            <Route exact path="/Sports"><News setProgress={this.setProgress} key="sports" category="sports" /></Route>
            <Route exact path="/Technology"><News setProgress={this.setProgress} key="technology" category="technology" /></Route>
          </Switch>

        </Router>

      </div>
    )
  }
}



