import React, { Component } from 'react'

import Navbar from './Components/Navbar';

import { Content } from './Components/Content'

import './App.css'

export class App extends Component {
  render() {
    return (
     <>
     
     <Navbar />
     <Content />
     </>
    )
  }
}

export default App
