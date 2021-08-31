import React, { Component } from 'react'

import Zmage from 'react-zmage'


export default class AboutSection extends Component {
    render() {
        return (
        <div className="aboutsection">
            <div className="watermark">
                <Zmage src="img/logo.png" loading="lazy"  sizes="(max-width: 479px) 24vw, (max-width: 767px) 15vw, 7vw" alt="loading..." className="watermarkimg"/>
            </div>
            <div className="w-layout-grid aboutgrid">
                <div className="aboutintro">
                    <div className="abouttext">
                        <p className="aboutname">毛新阳 Griffin</p>
                        <div className="aboutcontactblock">
                            <img src="img/Mail-dark.svg" loading="lazy" width="16" alt="loading..."/>
                            <p className="aboutcontact">E-mail: griffinmao1999@outlook.com<br/></p>
                        </div>
                        <div className="aboutcontactblock">
                            <img src="img/phone-telephone.svg" loading="lazy" height="18" alt="loading..."/>
                            <p className="aboutcontact">Tel: +86 17326087319<br/></p>
                        </div>
                        <div className="aboutcontactblock">
                            <img src="img/wechat.svg" loading="lazy" width="16" height="16" alt="loading..."/>
                            <p className="aboutcontact">WeChat: GriffinMao<br/></p>
                        </div>
                        <div className="aboutcontentblock">
                            <p className="aboutcontenttitle">EDUCATION</p>
                            <p className="aboutcontent">
                              2014-2017 河北衡水第一中学<br/>
                              2017-2021 浙江大学 工业设计本科<br/>
                              2021-     浙江大学 工业设计工程硕士
                            </p>
                        </div>
                        <div className="aboutcontentblock">
                            <p className="aboutcontenttitle">EXPERIENCE</p>
                            <p className="aboutcontent">
                              2014-2017<br/>
                              2017-2021<br/>
                              2021-
                            </p>
                        </div>
                        <p className="aboutcontenttext">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
                        <div className="aboutbottomblock">
                                <a href="https://griffinms-dapper-project.webflow.io/#" className="cvbutton w-button">VIEW MY CV</a>
                                <div className="socialmediablock">
                                    <a href="mailto: griffinmao1999@outlook.com" className="socialmedialink w-inline-block">
                                        <img src="img/Mail.svg" loading="lazy" alt="loading..."/>
                                    </a>
                                    <a href="https://griffinms-dapper-project.webflow.io/#" className="socialmedialink w-inline-block">
                                        <img src="img/Instagram.svg" loading="lazy" alt="loading..."/>
                                    </a>
                                    <a href="https://griffinms-dapper-project.webflow.io/#" className="socialmedialink w-inline-block">
                                        <img src="img/twitter.svg" loading="lazy" alt="loading..."/>
                                    </a>
                                    <a href="https://griffinms-dapper-project.webflow.io/#" className="socialmedialink w-inline-block">
                                        <img src="img/Zhihu.svg" loading="lazy" alt="loading..."/>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="aboutme"></div>
            </div>
        </div>
            
        )
    }
}