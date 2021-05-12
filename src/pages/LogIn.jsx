import React, { Component } from 'react'
import Footer from '../components/Footer'
import NavBarOthers from '../components/NavBarOthers'

export default class login extends Component {
    render() {
        return (
            <div>
                <NavBarOthers  login = "active"/>
                 
                <div className="container logincontent">
                    <div className="row">

                        <div className="col-md-8 col-md-offset-2">
                            <h3>Already a Member? Login to add your Startup.</h3>
                        </div>
                        <br></br><br></br><br></br><br></br>

                        <div className="col-md-8 col-md-offset-2">
                            <form id = "loginform">
                                <div className="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Sign in</button>
                                <br></br><br></br><br></br><br></br><br></br><br></br>
                            </form>
                        </div>

                    </div>
                    
                </div>
                 <Footer />
            </div>
        )
    }
}
