import React, { Component } from 'react'


export default class WorkItem extends Component {
    render() {

        const {imgherf,title,tag,intro}=this.props

        return (
            // <a href="https://griffinms-dapper-project.webflow.io/#" className="work w-inline-block">
            //     <div className="workimgw">
            //         <img src={imgherf} loading="lazy" sizes="(max-width: 767px) 95vw, (max-width: 1851px) 85vw, 1574px"  alt="loading..." className="workimg"/>
            //     </div>
            //     <div className="worktext">
            //         <div className="workheadline">
            //             <p className="worktitle">{title}</p>
            //             <p className="worktag">{tag}</p>
            //         </div>
            //         <p className="workintro">{intro}</p>
            //     </div>
            // </a>
            
            <div className="work w-inline-block">
                <div className="workimgw">
                    <img src={imgherf} loading="lazy" sizes="(max-width: 767px) 95vw, (max-width: 1851px) 85vw, 1574px"  alt="loading..." className="workimg"/>
                </div>
                <div className="worktext">
                    <div className="workheadline">
                        <p className="worktitle">{title}</p>
                        <p className="worktag">{tag}</p>
                    </div>
                    <p className="workintro">{intro}</p>
                </div>
            </div>
        )
    }
}