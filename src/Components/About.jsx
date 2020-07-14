import React, { Component } from 'react'
import biologo from './public/image/myprofile.jfif'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={biologo} width="180" height="180" alt="abtimg"/>
                    <p>When you know what you want in life then everything really bocomes easy but when you dont know then you really know what is life like me i have started my journey in computer science first with webdevelopment i have learned html,css,js,sql,bootstrap,reactjs then i have started machine learning and at the end i am with all these in my hands but machin learning was my best adventure those statistics and maths and reasons behind made me feel like there is alot to know so when you start learning start with compassion,determination and dedication....
                    </p>
                
            </section>
        )
    }
}

export default About
