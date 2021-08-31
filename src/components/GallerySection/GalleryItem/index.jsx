import React, { Component } from 'react'
// import Zmage from 'react-zmage'


export default class GalleryItem extends Component {
    render() {

        const { imgherf, tag, intro1, intro2 } = this.props

        return (
            <div className="galleryimgw w-inline-block">
                <div className="galleryhovershadow">
                    <div className="galleryimgtag">
                        <p className="galleryimgtagtext">{tag}</p>
                    </div>
                    <p className="galleryimgintro">{intro1}<br />{intro2}</p>
                </div>
                <img src={imgherf} loading="lazy" sizes="(max-width: 1596px) 85vw, 1357px" alt="loading..." />
            </div>


            // <Zmage className="galleryimgw w-inline-block" src={imgherf} loading="lazy" sizes="(max-width: 1596px) 85vw, 1357px" alt="loading..."/>


        )
    }
}