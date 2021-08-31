import React, { Component } from 'react'


import '../index.css'


export default class Poptrack extends Component {


  render() {

    return (
      <div className="project-page-content">
      	<div className="hero-image" id="fakenews-hero-image">
          <div className="hero-image-cover"></div>
          <div className="project-info">
            <h2>Educational kiosk, Product + UX Design</h2>
            <h1>Fake News Literacy</h1>
            <p>
              I worked on a team to research the fake news problem space and develop a solution: a game kiosk designed to help create awareness and improve literacy of fake news in the student population.
            </p>
            <div className="details">
              <ul>
                <li className="details-label">Role</li>
                <li className="details-info">UI/UX Designer</li>
                <li className="details-label">Contributors</li>
                <li className="details-info">
                  <a href="https://rachelglasser.net/" target="_blank"  rel="noreferrer">Rachel Glasser</a>, <a href="https://yoonyoungkim.com/" target="_blank" rel="noreferrer">Yoonyoung Kim</a>
                </li>
                <li className="details-label">Year</li>
                <li className="details-info">2020</li>
                <li className="details-label">Duration</li>
                <li className="details-info">4 months</li>
              </ul>
            </div>
          </div>
        </div>
    
        
        <div className="summary" id="fakenews-summary">
          <div className="problem-solution">
            <div className="problem">
              <h2>Problem</h2>
              <div className="problem-text">
                <h1>Defining "fake" news in the digital age</h1>
                <p>
                  New technologies and social media sites make the creation and spread of fake news easier and faster. The lines between "real", accurate news and "fake" news are becoming blurred. With young adult, student populations getting their news primarily from platforms such as Twitter and Facebook, how do we help to educate them and provide awareness of the spectrum of fake news existing?
              </p></div>
            </div>
            <div className="solution">
              <h2>Solution</h2>
              <div className="solution-text">
                <h1>Increasing awareness of fake news</h1>
                <p>
                  Our two-part fake news game kiosk aims to increase awareness among students. The first activity, generating fake news, show students how easily fake news can be created and spread. The second activity, identifying fake news, teaches students that fake news exists on a spectrum and isn't always clear.
                </p>
              </div>
            </div>
                    
          </div>
        </div>
    
        <div className="divider-photo">
          <img src="https://rfarn.com/media/fakenews3.jpg" alt=""/>
        </div>
        

        <div className="process-section will-fade fade appear">
        	<h1>Exploring our topic</h1>
        	<p>
        		As a team, we were interested in creating a project in response to increasing spread and prevalence of fake news. We did a set of activities to brainstorm the problem.
        	</p>
        	<div className="single-process-image">
        		<img src="https://rfarn.com/media/process/fakenews_exploring1.jpg" alt="Brainstorm exercise" className="modal-image"/>
            <div className="caption">
              Exploring the topic by answering a series of questions.
            </div>
        	</div>
        	<div className="three-images">
            <img src="https://rfarn.com/media/process/fakenews_exploring2.jpg" alt="Top five exercise part 1" className="modal-image"/>
            <img src="https://rfarn.com/media/process/fakenews_exploring2.jpg" alt="Top five exercise part 2" className="modal-image"/>
            <img src="https://rfarn.com/media/process/fakenews_exploring2.jpg" alt="Top five exercise part 3" className="modal-image"/>
          </div>
          <div className="caption" id="caption-alone">
              Top five exercise — each member came up with five ideas and we rearranged them in different groups to generate hybrid ideas.
          </div>
        </div>


        <div className="process-section center-section grey-background will-fade fade appear">
        	<h1>Gaining inspiration</h1>
        	<p>
        		Before defining our project details, we reviewed three case studies on fake news to get an idea of existing projects and inform our future process.
        	</p>
        	<div className="three-images">
        		<div className="one-of-three">
        			<img src="https://rfarn.com/media/process/fakenews_inspiration1.jpg" alt="Fake news stand"/>
	            <div className="caption">
	              Fakes News Stand — stand filled with fake news created by Columbia Journalism Review to bring awareness of fake news in media.
	          	</div>
        		</div>
            <div className="one-of-three">
        			<img src="https://rfarn.com/media/process/fakenews_inspiration1.jpg" alt="Checkology virtual classroom"/>
	            <div className="caption">
	              Checkology Virtual Classroom — project concept that teaches young students to recognize when information is credible and well-researched.
	          	</div>
        		</div>
            <div className="one-of-three">
        			<img src="https://rfarn.com/media/process/fakenews_inspiration1.jpg" alt="Detecting fake news study"/>
	            <div className="caption">
	              Detecting Fake News — a case study on fake news detection using a backtracking based on a cognitive system.
	          	</div>
        		</div>
          </div>
        </div>
    
      
        <div className="process-section will-fade fade appear">
        	<h1>Design brief</h1>
        	<p>
        		After looking at other projects and exploring the problem of fake news, we narrowed our audience down to Pittsburgh youth and also were interested in fake news in Twitter. We then mapped out stakeholders and territories based on this newly defined project scope. 
        	</p>
        	<div className="double-process-image">
            <div className="image-1">
              <img src="https://rfarn.com/media/process/fakenews_stakeholder.jpg" alt="Stakeholder map" className="modal-image"/>
              <div className="caption">
                Stakeholder map — mapping out various organizations, individuals, and companies related to our topic.
              </div>
            </div>
            <div className="image-2">
              <img src="https://rfarn.com/media/process/fakenews_stakeholder.jpg" alt="Territory map" className="modal-image"/>
              <div className="caption">
                Territory map — mapping out overlaps in areas related to our topic.
              </div>
            </div> 
          </div>
          <div className="insight">
            <div className="insight-label fakenews-insight-label">
              设计反馈
            </div>
            <div className="insight-text">
              The main feedback we received was to focus on further narrowing down our scale and audience. We had to consider how more specific groups within Pittburgh youth access and use news differently.
            </div>
          </div>
        </div>
    
        <div className="process-section center-section grey-background will-fade fade appear">
        	<h1>Initial ideating</h1>
        	<p>
        		Based on feedback, we narrowed our target audience even further to the demographic of young adult college students in Pittsburgh. We then started sketching out ideas for what the solution could look like and different approaches to combatting the issue of fake news within the student population.
        	</p>
        	<div className="double-process-image stay-double">
            <div className="image-1">
              <img src="./RFarn_files/fakenews_ideating1.jpg" alt="Fake news awareness stands" className="modal-image"/>
              <div className="caption">
                Fake news awareness stands on campus with papers showing fake news articles edited to be accurate.
              </div>
            </div>
            <div className="image-2">
              <img src="./RFarn_files/fakenews_ideating2.jpg" alt="Fake news display board" className="modal-image"/>
              <div className="caption">
                Fake news display board comparing stories people have heard with credible news stories.
              </div>
            </div> 
          </div>
          <div className="double-process-image stay-double">
            <div className="image-1">
              <img src="./RFarn_files/fakenews_ideating3.jpg" alt="Multiple idea sketches" className="modal-image"/>
              <div className="caption">
                Fake news dispensing machine that allows students to create articles, various formats for displaying news, interactive tabletop display that would teachstudents about fake news, fake news spectrum display showing various levels of fake news.
              </div>
            </div>
            <div className="image-2">
              <img src="./RFarn_files/fakenews_ideating4.jpg" alt="Branding" className="modal-image"/>
              <div className="caption">
                Fake news vending machine inspiration, typography exploration for a fake news brand.
              </div>
            </div> 
          </div>
        </div>
      
        

      
        <div className="process-section will-fade fade appear">
        	<h1>News survey</h1>
        	<p>
        		Before developing our solution more, we wanted to take a step back and learn about students’ news consumption habits. We sent a survey around campus.
        	</p>
        	<div className="single-process-image">
            <img src="https://rfarn.com/media/process/fakenews_stakeholder.jpg" alt="Survey findings" className="modal-image"/>
            <div className="caption">
              Survey — asking students about their habits such as how they access news, how often they read news, what topics they read, etc.
            </div>
          </div>
          <div className="insight">
            <div className="insight-label fakenews-insight-label">
              Insights gathered from our survey
            </div>
            <div className="insight-text">
              We found that a lot of students read news from social media sites and they actually check news fairly often.
            </div>
          </div>
        </div>


        <div className="process-section will-fade fade appear">
        	<h1>Ideation based on research</h1>
        	<p>
        		Our research showed us that students did engage with and care about news, but were easily fooled by the appearance of articles. With these insights, we continued to ideate and develop our ideas of the solution. We came up with three diverse ideas and brought prototypes in for a silent crit.
        	</p>
        	<div className="three-images">
        		<div className="one-of-three">
        			<img src="./RFarn_files/fakenews_ideating5.jpg" alt="Fake news vending machine" className="modal-image"/>
	            <div className="caption">
	              Fake news vending machine — a vending machine displaying fake news articles that dispenses the truth. 
	          	</div>
        		</div>
            <div className="one-of-three">
        			<img src="./RFarn_files/fakenews_ideating6.jpg" alt="Card game" className="modal-image"/>
	            <div className="caption">
	              Card game — two-part game that teaches students how easily fake news is created and spread. In the first version, the aim is to alter an article to make it as truthful as possible. In the second version, the aim is to prevent altering of information.
	          	</div>
        		</div>
            <div className="one-of-three">
        			<img src="./RFarn_files/fakenews_ideating7.jpg" alt="Fake news infiltration workshop" className="modal-image"/>
	            <div className="caption">
	              Fake news infiltration workshop — a workshop activity asking students to visualize the news cycle and how fake news infiltrates it.
	          	</div>
        		</div>
          </div>
          <div className="insight">
            <div className="insight-label fakenews-insight-label">
              Feedback from prototypes
            </div>
            <div className="insight-text">
              Students and professors liked the interactions of a physical vending machine and also the casual, fun aspect of a card game. Moving forward, we wanted to find ways to combine the two ideas.
            </div>
          </div>
        </div>



        <div className="process-section center-section grey-background will-fade fade appear">
        	<h1>Rapid iterations</h1>
        	<p>
        		With our deliverables set, we divided the final in parts: the website/kiosk screens and the physical machine. We each iterated and refined our chosen sections.
        	</p>
        	<div id="fakenews-prototype">
        		<img src="https://rfarn.com/media/process/fakenews_website1.svg" alt="" className="modal-image"/>
        		<img src="https://rfarn.com/media/process/fakenews_website1.svg" alt="" className="modal-image"/>
        		<img src="https://rfarn.com/media/process/fakenews_website1.svg" alt="" className="modal-image"/>
        		<img src="https://rfarn.com/media/process/fakenews_website1.svg" alt="" className="modal-image"/>
        		<img src="https://rfarn.com/media/process/fakenews_website1.svg" alt="" className="modal-image"/>
        		<img src="https://rfarn.com/media/process/fakenews_website1.svg" alt="" className="modal-image"/>
        		<img src="https://rfarn.com/media/process/fakenews_website1.svg" alt="" className="modal-image"/>
        		<img src="https://rfarn.com/media/process/fakenews_website1.png" alt="" className="modal-image"/>
        		<img src="https://rfarn.com/media/process/fakenews_website1.png" alt="" className="modal-image"/>
        		<img src="https://rfarn.com/media/process/fakenews_website1.png" alt="" className="modal-image"/>
        	</div>
        	<div className="caption" id="caption-alone">
        		Iterations on the website and branding.
        	</div>
        	
        </div>


        <div className="features will-fade fade appear">
          <h1>Final prototype</h1>
          <div className="feature-info-left">
            <img src="./RFarn_files/fakenews_final2.svg" alt="Generate activity" className="feature-image"/>
            <div className="feature-text feature-text-left fakenews-feature">
              <h2>Generating fake news</h2>
              <p>
                First kiosk activity. Users choose from recent news topics. They are then asked to write a sentence of fake news they have heard of on the topic of choice. The submitted headlines are used in the identifying activity. View <a href="https://www.figma.com/proto/aSsxBWZwpIDlJAuC9esLZk/SENIOR-STUDIO?node-id=446%3A6&amp;scaling=scale-down" target="_blank">clickable prototype</a>
              </p>
            </div>
          </div>
          <div className="feature-info-right">
            <div className="feature-text feature-text-right fakenews-feature">
              <h2>Identifying fake news</h2>
              <p>
                Second kiosk activity. Users are provided three headlines on one topic and asked to identify which is real. Once chosen, the cards reveal which headlines are real or fake. A receipt is printed outlining the facts and details of each headline. View <a href="https://www.figma.com/proto/aSsxBWZwpIDlJAuC9esLZk/SENIOR-STUDIO?node-id=446%3A59&amp;scaling=scale-down" target="_blank">clickable prototype</a>
              </p>
            </div>
            <img src="./RFarn_files/fakenews_final3.svg" alt="Categorized events" className="feature-image"/>
          </div>
          <div className="feature-video">
          	<p>
          		An informational website outlines the mission and product solution of our project. It also explains how the activities intersect and has an options for users to do the Generate activity online instead of at the kiosk. View <a href="https://www.figma.com/proto/aSsxBWZwpIDlJAuC9esLZk/SENIOR-STUDIO?node-id=369%3A68&amp;scaling=scale-down" target="_blank">clickable prototype</a>
          	</p>
          	<div className="double-process-image">
	            <div className="image-1">
	              <img src="./RFarn_files/fakenews_website3.png" alt="Interaction part 1"/>
	            </div>
	            <div className="image-2">
	              <img src="./RFarn_files/fakenews_final4.svg" alt="Interaction part 2"/>
	            </div> 
          	</div>
          </div>
        </div>
      </div>
    )
  }
}