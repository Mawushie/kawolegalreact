import React, { Component } from 'react'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Startups from '../pages/Startups'
import Register from '../pages/Register'
import LogIn from '../pages/LogIn'
import NavBarHome from '../components/NavBarHome'
import Footer from '../components/Footer'


export default class Router extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <div>
               <BrowserRouter>
                    
                    <Switch>
                        <Route exact path = "/" component = {Home}/>
                        <Route exact path = "/startups" component = {Startups} />
                        <Route exact path = "/register" component = {Register}/>
                        <Route exact path = "/login" component = {LogIn}/>
                    </Switch>   
                </BrowserRouter>  
            </div>
        )
    }
}

