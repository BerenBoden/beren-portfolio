import React from 'react';
import Navigation from '../navigation/Navigation';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './ContactPage.scss';
import logo from '../../img/vector-spaceship.png'

function ContactPage() {
    return (
        <div className="contactPage">
            <Navigation />
            <div className="contactPage__header">
                <h1>Get In Touch</h1>
            </div>
            <div className="contactPage__body">
                <div className="contactPage__image">
                    <img src={logo} alt="img" />
                </div>
                <div className="contactPage__description">
                    <small>Beren Boden</small>
                    <h1 style={{textDecoration: "underline"}}>Web Developer & Designer</h1>
                    <p>I specialize in MERN stack web development front end & back end, however I can work with many other languages and stacks but I feel as though this specific tech stack is growing in popularity and more and more businesses are adopting these technologies. Using the MERN stack also addresses critical but repetitive development tasks that redirects efforts towards building and innovating upon a breakthrough application and its testing. A great feature of the MERN stack is Single Page Web Applications or SPAs which in my opinion are the future of web development. <br /><br /> Feel free to get in touch with me, I am available 24/7. </p>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactPage
