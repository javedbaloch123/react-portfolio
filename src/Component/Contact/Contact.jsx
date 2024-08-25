import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Contact.css';
import email_icon from '../../assets/mail_icon.svg';
import phone_icon from '../../assets/call_icon.svg';
// import 'react-notifications/lib/notifications.css';
// import { NotificationContainer, NotificationManager } from 'react-notifications';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "f2392176-cfd7-462f-af8f-75df8caea4ab");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("thanks");
        }
    };

    return (

        <div id='contact' className='contact-form'>

            <div className="contact-title">
                <h1>Get In touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="container-work">

                <div className="row">
                    <div className="col-6 left-form">
                        <div className="contact-heading">
                            <h2>Let's talk</h2>
                            <p>this is all about myself and i am here to learn with me
                                this is all about myself and i am here to learn with me
                            </p>
                        </div>
                        <div className="email">
                            <img src={email_icon} alt="" />
                            <h3>javed123@gmail.com</h3>
                        </div>
                        <div className="phone">
                            <img src={phone_icon} alt="" />
                            <h3>03838902008</h3>
                        </div>
                    </div>
                    <div className="col-6">
                        <form onSubmit={onSubmit}>
                            <div className="input-div">
                                <input type="text" placeholder='enter your name' name='name' />
                                <input type="email" placeholder='enter your email' name='email' />
                                <textarea name="message" placeholder='enter your message' id="message" />
                            </div>
                            <button type='submit' className="nav-content contact-btn">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact