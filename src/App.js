// @flow

import React, { Component } from 'react';
import Display from './components/display.js';
import DisplayById from './components/displayById.js';
import DisplayByClick from './components/displayByClick.js'

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

type Props = {}

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
      <Router>
        <div className="container">
        
          <ul>
            <li><Link to="/all">ALL POSTS</Link></li>
            <li><Link to="/store">STORED POSTS</Link></li>
          </ul>
          <hr/>

        <Route path="/store" component={DisplayByClick} /> 
        <Route path="/byid/:id" component={DisplayById} /> 
        <Route path="/all" component={Display} /> 
    
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
