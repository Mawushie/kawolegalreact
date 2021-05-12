import React, { Component } from 'react'
import NavBarHome from '../components/NavBarHome'
import Footer from '../components/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className = "container home">
                   <NavBarHome />
                    <div className="content">
                     
                        <div className="text-center">
                            <h1>KAWOLEGAL</h1>
                            <h2>A collaborative ecosystem for problem solvers and support for Startups.</h2><br></br>
                            <h2><a className="btn homebtn btn-primary btn-lg" href="#" role="button">Register Now!</a></h2>
                        </div>
                    </div> 
                
                </div>
                <Footer />
               
            </div> 
        )
    }
}
