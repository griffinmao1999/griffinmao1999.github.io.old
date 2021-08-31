import React, { Component } from 'react'
import WorkItem from './WorkItem'
import { Link } from 'react-router-dom'


export default class WorkSection extends Component {


    render() {
        return (
            <div className="worksection w-layout-grid workgrid">


                <Link to={`/daizyon/work1`}>
                    <WorkItem
                        imgherf="img/work1.png"
                        title="POPTRACK 闪迹"
                        tag="2020.10-2021.06"
                        intro="PRODUCT+UX DESIGN, POP-UP SYSTEM "
                    />
                </Link>


                <Link to={`/daizyon/work2`}>
                    <WorkItem
                        imgherf="img/work2.png"
                        title="新华智云"
                        tag="2021-03-2021.06"
                        intro="UX DESIGN INTERNSHIP"
                    />
                </Link>

                <Link to={`/projects/poptrack`}>
                    <WorkItem
                        imgherf="img/ile2.jpg"
                        title="rosie"
                        tag="2077"
                        intro="orem ipsum dolor sit amet, consectaasasas1sasdqqa s dsdasd sdlplp"
                    />
                </Link>

                <Link to={`/projects/xinhua`}>
                    <WorkItem
                        imgherf="img/ile2.jpg"
                        title="rosie"
                        tag="2077"
                        intro="orem ipsum dolor sit amet, consectaasasas1sasdqqa s dsdasd sdlplp"
                    />
                </Link>


                <WorkItem
                    imgherf="img/ile2.jpg"
                    title="rosie"
                    tag="2077"
                    intro="orem ipsum dolor sit amet, consectaasasas1sasdqqa s dsdasd sdlplp"
                />

                <WorkItem
                    imgherf="img/ile2.jpg"
                    title="rosie"
                    tag="2077"
                    intro="orem ipsum dolor sit amet, consectaasasas1sasdqqa s dsdasd sdlplp"
                />


                <WorkItem
                    imgherf="img/ile2.jpg"
                    title="rosie"
                    tag="2077"
                    intro="orem ipsum dolor sit amet, consectaasasas1sasdqqa s dsdasd sdlplp"
                />

                <WorkItem
                    imgherf="img/ile2.jpg"
                    title="rosie"
                    tag="2077"
                    intro="orem ipsum dolor sit amet, consectaasasas1sasdqqa s dsdasd sdlplp"
                />
            </div>

        )
    }
}