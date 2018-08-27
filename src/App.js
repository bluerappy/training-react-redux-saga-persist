import React, { Component } from 'react';
import Display from './components/display.js';
import DisplayById from './components/displayById.js'

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div className="container">
        
          <ul>
            <li><Link to="/all">ALL POSTS</Link></li>
          </ul>
          <hr/>
  
        <Route path="/byid/:id" component={DisplayById} /> 
        <Route path="/all" component={Display} /> 
    
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
