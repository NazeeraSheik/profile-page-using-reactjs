import React, { Component } from 'react'
import logo from '../Components/public/image/myprofile.jfif';




class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Hi! I'm Sheik Nazeera </h1>
                    <p id="paragarph1"> WEB DEVELOPER AND DATA ANALYSER <br/>
                    nazeerashaik61@gmail.com</p>
                   
                    
            </section>
        )
    }
}

export default Banner


