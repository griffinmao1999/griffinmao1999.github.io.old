import React, { Component } from 'react'


export default class Header extends Component {

    scrolltomainpart = () => {
        var clientH = document.documentElement.clientHeight;
        // var Ontop = document.documentElement.scrollTop || document.body.scrollTop;//兼容性设置;
        
        document.documentElement.scrollTo({ 
            top: clientH, 
            behavior: "smooth" 
        });
        

    }

    render() {
        return (
            <header id="Home" className="homepart">
                <div className="homesection">
                    <div className="signblock">
                        <img src="img/English Sign Black.png" loading="lazy" sizes="(max-width: 479px) 160px, (max-width: 767px) 33vw, 200px" alt="loading..." />
                    </div>
                    <div className="introwrap">
                        <p className="paragraph">Hello, I am Xinyang Mao, majoring industrial design in ZJU. You can call me Griffin. Welcome to my studio, which includes my portfolio, some ideas and resume. Scroll down to see it.</p>
                    </div>
                    <div className="scrolltag" onClick={this.scrolltomainpart}>

                        <div href="#MainPart" className="greenblock w-inline-block">
                            <img src="img/Vector.svg" loading="lazy" height="48" alt="loading..." className="arrow" />
                        </div>
                    </div>
                    <div className="homeshadow"></div>
                    <div className="homebackimgw">
                        <img src="img/back.gif" loading="lazy" sizes="(max-width: 1080px) 100vw, 1080px"
                            alt="loading..." className="homebackimg" />
                    </div>
                </div>
            </header>
        )
    }
}