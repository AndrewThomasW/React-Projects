
import React, { Component } from 'react';
import Series from '../../containers/series'
import Main from '../Main'
import 'whatwg-fetch';
import './App.css';


class App extends Component {
  
  render() {
    return (

      <div className="App">

        <header className="App-header">
          <h1>TV Series App</h1>
        </header>
        <div className="container">
          <Main />
        </div>


      </div>

    );
  }
}

export default App;
