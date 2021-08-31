import React, { Component } from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import './index.css'

import Backtotop from '../../components/Backtotop'


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer />
        <Backtotop/>
      </div>
    )
  }
}
