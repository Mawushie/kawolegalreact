import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="row">
                        <div className="col-md-6 rights col-sm-12 col-xs-12">
                            <p>
                                &copy; 2017 KawoLegal. All Rights Reserved
                            </p>
                        </div>
                

                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <ul className="socials">
                                <li className="link"><Link to= "/" className="fa fa-instagram"></Link></li>
                                <li className="link"><Link to= "/" className="fa fa-linkedin"></Link></li>
                                <li className="link"><Link to= "/" className="fa fa-twitter"></Link></li>
                                <li className="link"><Link to= "/" className="fa fa-facebook"></Link></li>      
                            </ul>
                
                        </div>

                    
                    </div>
                </div>
            </div>
        )
    }
}
