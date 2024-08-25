import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className="container">
      <div className='footer-div'>
        <div className="footer-title">
          <img src="/src/assets/logo.svg" />
          <div className="para">
            <p>This is my channel you can sybscribe thisthis is my channel you can subscribe thisthis is my channel you can sybscribe this thisthis is my channel you can subscribe.</p>
          </div>
        </div>

        <div className="footer-input">
          <input type="text" placeholder='enter your message' />
          <button className='footer-btn'>Subscribe</button>
        </div>

      </div>
      <div className="last-section">
        <hr className='hr-tag' />
        <div className="tags">
          <p className='left-para'>@Copyright by latest Alex 2024</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer