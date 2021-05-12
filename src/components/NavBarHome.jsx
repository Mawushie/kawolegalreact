import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavBarHome extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                 <div class="col-md-12 col-xs-12 col-sm-12">
                    <nav className="navbar navbar-default navbar-home navbar-fixed-top">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">
                                <img alt="Brand" src = {"images/kawolegallogo.png"}className="img-responsive"  id = "logo"/>
                                </a>
                            </div> 
                    
                           
                            <div id="navlinks">
                                <ul class="nav navbar-nav navbar-right navlinks">
                                    <li className = "active">< Link to = "/">Home</Link></li>
                                    <li><Link to="/startups">Startups</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                </ul>
                            </div>
                   
                        </div>
                    </nav>
                </div>
             </div>
        )
    }
}
