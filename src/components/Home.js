import { Component } from "react"
import React from 'react'
import './Home.css'

class Home extends Component{
    render(){
        return(
                <main>
                    <section id="home">
                        <div>
                            <ul >
                                <li style={{backgroundImage: 'url(images/slide-1.jpg)'}} className="sliding-img">
                                        <div className="row">
                                            
                                            <h1>Hi!</h1>
                                            <h1>I am Jackson!</h1>
                                            <p>100% reactjs template made by me</p>
                                            
                                        </div>
                                </li>
                                <li style={{backgroundImage:'url(images/slide-2.jpg)'}} className="sliding-img">
                                        <div className="row">
                                            <h1>Hi!</h1>
                                            <h1>I am traveller</h1>
                                            <p>I love travelling</p>
                                        </div>
                                </li>

                            </ul>
                        </div>
                    </section>
                </main>
        )
    }

}
export default Home