import React, { Component } from 'react'
import NavSection from '../NavSection'
import WorkSection from '../WorkSection'
import BlogSection from '../BlogSection'
import GallerySection from '../GallerySection'
import AboutSection from '../AboutSection'


export default class Main extends Component {

  
  changeTab = () => {
    
    return (e) => {


      if (e.target.getAttribute("aria-selected") === 'false') {
        
        var num = e.target.getAttribute("data-w-tab");
        var tablink = document.getElementsByClassName("tablink");
        var tab = document.getElementsByClassName("w-tab-pane");
        for (var i = 0; i < tablink.length; i++) {
          tablink[i].setAttribute("aria-selected", 'false');
          tablink[i].setAttribute("class", "tablink w-inline-block w-tab-link");
          if (tablink[i].getAttribute("data-w-tab") === num) {
            tab[i].setAttribute("class", "w-tab-pane  w--tab-active");
          } else {
            tab[i].setAttribute("class", "w-tab-pane");
          }
          
        }

        e.target.setAttribute("class", "tablink w-inline-block w-tab-link w--current");
        e.target.setAttribute("aria-selected", 'true');

      }


    }
  }

  render() {
        return (
        <main id="MainPart" className="mainpart">
          
          <NavSection/>
            
          <div className="tabsection">
            <div data-duration-in="300" data-duration-out="100" className="tabs w-tabs">

              <div className="tabs-menu w-tab-menu" role="tablist">
                <li onClick={this.changeTab()} data-w-tab="Tab 1" className="tablink w-inline-block w-tab-link w--current " id="w-tabs-0-data-w-tab-0"  role="tab" aria-controls="w-tabs-0-data-w-pane-0" aria-selected="true">
                  WORKS
                </li>
                <li onClick={this.changeTab()} data-w-tab="Tab 2" className="tablink w-inline-block w-tab-link "  id="w-tabs-0-data-w-tab-1"  role="tab" aria-controls="w-tabs-0-data-w-pane-1" aria-selected="false">
                  BLOG
                </li>
                <li onClick={this.changeTab()} data-w-tab="Tab 3" className="tablink w-inline-block w-tab-link" id="w-tabs-0-data-w-tab-2"  role="tab" aria-controls="w-tabs-0-data-w-pane-2" aria-selected="false">
                  GALLERY
                </li>
                <li onClick={this.changeTab()} data-w-tab="Tab 4" className="tablink w-inline-block w-tab-link" id="w-tabs-0-data-w-tab-3"  role="tab" aria-controls="w-tabs-0-data-w-pane-3" aria-selected="false">
                  ABOUT
                </li>
              </div>
                
              <div className="tabs-content w-tab-content ">

                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active " id="w-tabs-0-data-w-pane-0" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-0">
                  <WorkSection/>    
                </div>

                <div data-w-tab="Tab 2" className="w-tab-pane will-fade " id="w-tabs-0-data-w-pane-1" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-1">
                  <BlogSection/>
                </div>

                <div data-w-tab="Tab 3" className="w-tab-pane will-fade " id="w-tabs-0-data-w-pane-2" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-2">
                  <GallerySection/>
                </div>

                <div data-w-tab="Tab 4" className="w-tab-pane will-fade" id="w-tabs-0-data-w-pane-3" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-3">
                  <AboutSection/>
                </div>

              </div>
            </div>
          </div>
        
        </main>
            
        )
    }
}