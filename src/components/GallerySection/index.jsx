import React, { Component } from 'react'
import GalleryItem from './GalleryItem'


export default class GallerySection extends Component {
    render() {
        return (
            <div className="gallerysection w-layout-grid gallerygrid">

                <div className="galleryrow">
                    <GalleryItem
                        imgherf="img/dbe5.jpg"

                        tag="Animation"
                        intro1="orem ipsum dolor sit amet"
                        intro2="consectetur adipiscing e"
                    />

                    <GalleryItem
                        imgherf="img/922.jpg"

                        tag="Trip"
                        intro1="orem ipsum dolor sit amet"
                        intro2="consectetur adipiscing e"
                    />
                    
                    <GalleryItem
                        imgherf="img/glr-xian.jpg"

                        tag="Animation"
                        intro1="orem ipsum dolor sit amet"
                        intro2="consectetur adipiscing e"
                    />
                </div>
                <div className="galleryrow">
                    <GalleryItem
                        imgherf="img/12.jpg"

                        tag="Design"
                        intro1="orem ipsum dolor sit amet"
                        intro2="consectetur adipiscing e"
                    />

                    <GalleryItem
                        imgherf="img/bbc.jpg"

                        tag="Animation"
                        intro1="orem ipsum dolor sit amet"
                        intro2="consectetur adipiscing e"
                    />
                    <GalleryItem
                        imgherf="img/glr-haining.jpg"

                        tag="Animation"
                        intro1="orem ipsum dolor sit amet"
                        intro2="consectetur adipiscing e"
                    />
                </div>
                <div className="galleryrow">
                    <GalleryItem
                        imgherf="img/glr-gem.jpg"

                        tag="Animation"
                        intro1="orem ipsum dolor sit amet"
                        intro2="consectetur adipiscing e"
                    />

                    <GalleryItem
                        imgherf="img/glr-genshanxilu.jpg"

                        tag="Animation"
                        intro1="orem ipsum dolor sit amet"
                        intro2="consectetur adipiscing e"
                    />
                    <GalleryItem
                        imgherf="img/glr-liangzhu.jpg"

                        tag="Animation"
                        intro1="orem ipsum dolor sit amet"
                        intro2="consectetur adipiscing e"
                    />
                    <GalleryItem
                        imgherf="img/glr-thailand.jpg"

                        tag="Trip"
                        intro1="orem ipsum dolor sit amet"
                        intro2="consectetur adipiscing e"
                    />
                </div>
                <div className="galleryrow">
                    <GalleryItem
                        imgherf="img/glr-leifengta.jpg"

                        tag="Trip"
                        intro1="雷峰塔"
                        intro2="杭州市西湖区 2021.08.27"
                    />
                    <GalleryItem
                        imgherf="img/oney.jpg"

                        tag="Animation"
                        intro1="orem ipsum dolor sit amet"
                        intro2="consectetur adipiscing e"
                    />

                    <GalleryItem
                        imgherf="img/glr-ziyun.jpg"

                        tag="Animation"
                        intro1="orem ipsum dolor sit amet"
                        intro2="consectetur adipiscing e"
                    />
                    
                </div>

            </div>

        )
    }
}