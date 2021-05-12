import React, { Component } from 'react'
import Footer from '../components/Footer'
import NavBarOthers from '../components/NavBarOthers'
import style from 'styled-components'

export default class Register extends Component {
    render() {
       
        return (
            <div>
                <NavBarOthers register = "active" />

                <div className="container registercontent">
                    <div className="row">

                        <div className="col-md-8 col-md-offset-2">
                            <h3>Join KawoLegal. Sign up to get your Startup listed now!</h3>
                        </div>
                         
                            <br></br> <br></br><br></br><br></br><br></br>
                         <div className="col-md-8 col-md-offset-2">
                            <form id = "registerform">
                                <div className="form-group">
                                    <label for="fullName">Full Name</label>
                                    <input type="email" className="form-control" id="fullName" placeholder="Full Name" />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label for="password">Confirm Password</label>
                                    <input type="password" className="form-control" id="password" placeholder=" Confirm Password" />
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Sign up</button>
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
