import React, { Component } from 'react';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Navbar />
          <div className="container">
            <Users />
          </div>
      </div>
    );
  }

}

export default App;