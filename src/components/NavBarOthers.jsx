import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Router from '../components/Router'

export default class NavBarOthers extends Component {
    
    render() {
        return (
            <div>
                 <div class="col-md-12 col-xs-12 col-sm-12">
                    <nav className="navbar navbar-default navbar-home navbar-fixed-top" id = "navbarothers">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">
                                <img alt="Brand" src = {"images/kawolegallogo.png"}className="img-responsive"  id = "logo"/>
                                </a>
                            </div> 
                    
                           
                            <div id="navlinks">
                                <ul class="nav navbar-nav navbar-right navlinks">
                                    <li><Link to = "/">Home</Link></li>
                                    <li className = {this.props.startups}><Link to="/startups">
                                        Startups
                                    </Link></li>

                                    <li className = {this.props.register} ><Link to="/register">
                                         Register
                                    </Link></li>

                                    <li className = {this.props.login}><Link to="/login">
                                        Login
                                    </Link></li>
                                </ul>
                            </div>
                   
                        </div>
                    </nav>
                </div>
             </div>
        )
    }
}
