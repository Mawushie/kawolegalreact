import React, { Component } from 'react'
import Footer from '../components/Footer'
import NavBarOthers from '../components/NavBarOthers'
import StarupsInfo from '../components/StarupsInfo'

export default class startups extends Component {
   
    render() {
        return (
            <div>
                <NavBarOthers startups = "active"/>
                 <div className="row search text-center">
                    <div className="col-md-11 col-md-offset-1">
                            
                        <form className="myform">
                            <input type="text" placeholder="search Startup by name or industry" name="search" />
                            <button type="submit"><i className="fa fa-search"><span>Search</span></i></button>
                        </form> 

                    </div>
                 </div>

                 <StarupsInfo 
                    img = "./images/tatahub.jpeg" 
                    name = "tatahub"
                    description = "a website for tutorials" />

                 <StarupsInfo 
                    img = "./images/anditer.jpeg" 
                    name = "Anditer"
                    description = "Anditer is a tech blog" />
                
                 <StarupsInfo 
                    img = "./images/thinkandzoom.png" 
                    name = "Think and Zoom"
                    description = "Providing solutions for the visually impaired, 
                                  such as mind-controlled zooming, and wearable controlled zooming." />
                
                 <StarupsInfo 
                    img = "./images/slatecube.png" 
                    name = "Slatecube"
                    description = "Slatecube helps job seekers develop job-relevant skills, gain work experience, 
                    and land well paying jobs through world-class up-skilling courses and virtual internships." />

                 <StarupsInfo 
                    img = "./images/sleekjob.png" 
                    name = "Sleekjob Academy"
                    description = "Trains world class software developers in Ghana and matches them to employment opportunities" />
               
               
                <Footer />
            </div>
        )
    }
}
