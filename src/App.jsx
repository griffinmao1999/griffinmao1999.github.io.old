import React, { Component } from 'react'

import HomePage from './pages/HomePage'
import MdPage from './pages/MdPage'

import WorkPage from './pages/WorkPage'

import { Route } from 'react-router-dom'

import Scrolltotop from './components/Scrolltotop'


export default class App extends Component {
  render() {
    return (
      <div>
        <Scrolltotop>
          <Route exact path="/" component={HomePage} />
          <Route path="/daizyon/:mdname" component={MdPage} />
          <Route path="/projects" component={WorkPage} />
        </Scrolltotop>
        
        
      </div>
    )
  }
}
