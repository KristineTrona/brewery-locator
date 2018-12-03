import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import MapContainer from './components/MapContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MapContainer}/>
      </div>
    );
  }
}

export default App;
