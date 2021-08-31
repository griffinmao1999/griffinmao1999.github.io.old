import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import Poptrack from './Poptrack'
import Xinhua from './Xinhua'

import Footer from '../../components/Footer'

import Backtotop from '../../components/Backtotop'



import NavSection from '../../components/NavSection'

export default class WorkPage extends Component {


  render() {

    return (
      <div className="workpage">
        <NavSection />

        <Route path="/projects/poptrack" component={Poptrack} />
        <Route path="/projects/xinhua" component={Xinhua} />
        
        <Footer />
        <Backtotop/>
      </div>
        
        
    )
  }
}