import React from 'react'
import './Hero.css'
import profile from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile} />
            <h1><span>I'm Alex Bennit</span>, frontend developer based in USA.</h1>
            <p>I'm Alex Bennit, frontend developer based in USAI'm Alex Bennit, frontend developer based in USAI'm Alex Bennit, frontend developer based in USA</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact With Me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero