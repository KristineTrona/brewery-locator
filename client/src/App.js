import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import BeerMap from './components/Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={BeerMap}/>
      </div>
    );
  }
}

export default App;
