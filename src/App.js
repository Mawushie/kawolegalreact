import logo from './logo.svg';
import './App.css';
import Router from './components/Router'
import React, { Component } from 'react'

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
    <Router />
    </div>
    )
  }
}

