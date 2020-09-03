import React from 'react';
import Navigation from '../navigation/Navigation';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './ContactPage.scss';

function ContactPage() {
    return (
        <div className="contactPage">
            <Navigation />
            <div className="contactPage__header">
                <h1>Get In Touch</h1>
            </div>
            <div className="contatPage">
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage
