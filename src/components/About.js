import { Component } from "react";
import React from "react"
import "./About.css"

class About extends Component{
    render(){
        return(
            <div className="about-inner">
                <h1>About Me</h1>
                <ul>
                    <li>I am very active girl</li>
                    <li>I want to be a developer</li>
                    <li>I love ReactJs</li>
                </ul>
            </div>
        )
    }
}export default About