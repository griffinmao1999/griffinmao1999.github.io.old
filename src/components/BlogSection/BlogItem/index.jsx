import React, { Component } from 'react'


export default class BlogItem extends Component {
    render() {

        const {imgherf,title,time,tag,intro}=this.props

        return (
            <a href="https://griffinms-dapper-project.webflow.io/#" className="blog w-inline-block">
                <div className="bloghovershadow">
                    <p className="bloghovertext">—— READ MORE ——</p>
                </div>
                <div className="blogimgw">
                    <img src={imgherf} loading="lazy" width="500" sizes="(max-width: 767px) 95vw, 28vw" alt="loading..." className="blogimg"/>
                </div>
                <div className="blogtext">
                    <div className="blogheadline">
                        <p className="blogtitle">{title}</p>
                        <p className="blogtag">{time}</p>
                    </div>
                    <p className="blogtag">{tag}</p>
                    <p className="blogintro">{intro}</p>
                </div>
            </a>
            
        )
    }
}