import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let movies = [
  {
    title: "The Fellowship of the Ring",
    hours: 2,
    minutes: 58
  },
  {
    title: "The Two Towers",
    hours: 2,
    minutes: 59
  },
  {
    title: "The Return of the King",
    hours: 3,
    minutes: 21
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App movies={movies} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
