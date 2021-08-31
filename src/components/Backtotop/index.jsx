import React, { Component } from 'react'
import './index.css'





export default class Backtotop extends Component {
    componentDidMount() {

        var divs = document.querySelector(".backtotop");
        //获取可视区域的高度;
        var clientH = document.documentElement.clientHeight;
        var timer = null;
        var Ontop = document.documentElement.scrollTop || document.body.scrollTop;//兼容性设置;	

        if (divs !== null) {

            window.onscroll = function () {
                //获得滚动条到顶部的距离

                Ontop = document.documentElement.scrollTop || document.body.scrollTop;//兼容性设置;

                if (Ontop > clientH * 2) {
                    divs.style.display = "flex";
                } else {
                    divs.style.display = "none";
                }
                toTop(); //调用回到顶部函数；
            }

        }


        //回到顶部函数;
        function toTop() {
            divs.onclick = function () {
                timer = setInterval(function () {
                    //让滚动条到顶部的距离自动缩减到0;
                    document.documentElement.scrollTop = document.body.scrollTop = Math.floor(Ontop - 80);//兼容性设置;
                    //设置定时器

                    if (Ontop === 0 || document.documentElement.scrollTop === 0) {

                        clearInterval(timer);
                    }
                }, 10);
            }
        }


    }

    render() {
        return (


            <div className="backtotop" >
                <img src="../img/Vector-a.svg" loading="lazy" height="36" alt="back-to-top" className="arrow" />
            </div>

        )
    }
}