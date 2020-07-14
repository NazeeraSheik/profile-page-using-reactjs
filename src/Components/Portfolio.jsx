import React, { Component } from 'react'
import pybot from '../Components/public/image/pybot.png';
import Opencv from '../Components/public/image/Snapshot.png';
import NightMares from '../Components/public/image/menu3.png';
import RecorderMaintainer from '../Components/public/image/de.png';
import WordPress from '../Components/public/image/blog.png';
import Password from '../Components/public/image/bute.png';




class Portfolio extends Component {
    render() {
        return (
            
            <section className="projects">
                  <h1 id='Portfolio'>Portfolio</h1>
                  <p>Some of the projects done by me including my blog.</p>

                    <div className="container">
                        <a href="#"><img src={pybot} width="200" height="200" alt="Pybot"/><p>Life Style store using Webdevelopment</p></a>
                        <a href="#"><img src={Opencv} width="200" height="200" alt="Pybot"/><p>prediction of heart diesease</p></a>
                        <a href="#"><img src={NightMares} width="200" height="200" alt="Pybot"/><p>Ethical hacing basics</p></a>
                    </div>

                    <div className="container">
                        <a href="#"><img src={RecorderMaintainer} width="200" height="200" alt="Pybot"/><p>Machine Learning Projects</p></a>
                        <a href="#"><img src={WordPress} width="200" height="200" alt="Pybot"/><p>Web development projects</p></a>
                        <a href="#"><img src={Password} width="200" height="200" alt="Pybot"/><p>Python projects</p></a>
                    </div>

                       
            </section>
        )
    }
}

export default Portfolio


