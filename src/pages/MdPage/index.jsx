import React, { Component } from 'react'
import MdPart from '../../components/MdPart'
import Footer from '../../components/Footer'

import Back from '../../components/Back'
import Backtotop from '../../components/Backtotop'
export default class MdPage extends Component {


  render() {
    const { mdname } = this.props.match.params
    console.log(mdname);
    return (
      <div>
        <MdPart mdherf={mdname} />
        <Footer />
        <Backtotop/>
        <Back />
      </div>
    )
  }
}