import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie.js'

class App extends Component {
  render() {
    let allMovies = this.props.movies.map((movie, index) =>
      <Movie 
        title={movie.title}
        hours={movie.hours}
        minutes={movie.minutes}
        key={index}
      
      />
    )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          {allMovies}

        </header>
      </div>
    );
  }
}

export default App;
