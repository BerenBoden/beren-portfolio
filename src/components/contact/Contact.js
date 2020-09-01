import React from 'react'
import emailjs from 'emailjs-com'; 
import './Contact.scss'

export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'email_beren', e.target, 'user_UbO2fdiEpLffF0OdcXUY3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  
    return (
    <div id="contact" className="contact">
        <h1>
            Contact Me
        </h1>
        <form className="contact__form" onSubmit={sendEmail}>
            <div className="contact__block">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Enter your subject..."/>
            </div>
            <div className="contact__block">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter your name..."/>
            </div>
            <div className="contact__block">
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter your email..."/>
            </div>
            <div className="contact__block">
                <label>Message</label>
                <textarea name="message" placeholder="Enter your message..."/>
            </div>
            <div className="button">
                <input type="submit" value="Send" />
            </div>
        </form>
    </div>
    );
}
