import React, { Component } from 'react'
import './index.css'





export default class Back extends Component {
    backtoprevious = () => {
        return () => {
            window.history.go(-1);
        }

    }

    render() {
        return (
            <div onClick={this.backtoprevious()} className="back" >
                <img src="../img/Vector-l.svg" loading="lazy" height="20" alt="back-to-previous" className="arrow" />
            </div>

        )
    }
}