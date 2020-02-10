import { Component } from "react";
import React from 'react'
import { BrowserRouter,Route } from "react-router-dom"
import './Header.css'
import About from './About';
import Contact from "./Contact";
import Home from "./Home";


class Header extends Component{
    render(){
        return(    
            <BrowserRouter>     
            <div>
<header className="header-inner">
<nav>
    <ul>
       <li><a href="home">Home</a></li>
       <li><a href="about">About</a></li>
       <li><a href="contact">Contact</a></li>
     </ul>
</nav>
</header>
<Route path="/home" component={Home}/>
<Route path="/about" component={About}/>
<Route path="/contact" component={Contact}/>

</div>
</BrowserRouter>
        )
    }
}export default Header