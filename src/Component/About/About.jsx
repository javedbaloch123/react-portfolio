import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/about_profile.svg'
 

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm Alex Bennit, frontend developer based in USAI'm Alex Bennit, frontend developer based in USAI'm Alex Bennit, frontend developer based in USA</p>
                        <p>I'm Alex Bennit, frontend developer based in USAI'm Alex Bennit, frontend developer based in USAI'm Alex Bennit, frontend developer based in USA</p>
                    </div>
                    <div className="about-skill">
                        <div className="skill"><p>HTML & CSS</p> <hr style={{ width: "50%" }} /></div>
                        <div className="skill"><p>React Js</p> <hr style={{ width: "70%" }} /></div>
                        <div className="skill"><p>Javascript</p> <hr style={{ width: "60%" }} /></div>
                        <div className="skill"><p>Next JS</p> <hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievment">
                <div className="achievment">
                    <h1>10+</h1>
                    <p>Years of experience</p>
                </div>
                <hr />
                <div className="achievment">
                    <h1>90+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="achievment">
                    <h1>15+</h1>
                    <p>happy clients</p>
                </div>
            </div>
   

        </div>
        
    )
}

export default About