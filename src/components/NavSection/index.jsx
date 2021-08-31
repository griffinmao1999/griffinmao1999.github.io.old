import React, { Component } from 'react'



export default class NavSection extends Component {

    darknotonlietip = () => {
        return () => {
            alert("深色模式还未上线，敬请期待:)")
        }

    }

    localnotonlietip = () => {
        return () => {
            alert("中英切换还未上线，敬请期待:)")
        }

    }
    render() {
        return (
            <div className="navsection">
                <div className="signblocknav">
                    <a href="#Home" className="w-inline-block w--current">
                        <img src="img/English Sign Black.png" loading="lazy" sizes="(max-width: 479px) 58vw, (max-width: 767px) 33vw, (max-width: 991px) 23vw, 200px" alt="loading..." />
                    </a>
                </div>
                <div className="settinglinkblock">
                    <li onClick={this.darknotonlietip()} className="settinglink w-inline-block">
                        <img src="img/moon.svg" loading="lazy" width="20" alt="loading..." />
                    </li>
                    <li onClick={this.localnotonlietip()} className="settinglink w-inline-block">
                        <img src="img/earth.svg" loading="lazy" width="20" alt="loading..." />
                    </li>
                </div>
            </div>

        )
    }
}