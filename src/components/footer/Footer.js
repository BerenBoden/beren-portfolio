import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div class="footer__container">
                    <div class="footer__content">
                        <h2>Contact <br />Infromation -</h2>
                        <p>Feel free to get in touch with me...</p>
                        <p>E: <span><a href="email:beren.boden@gmail.com">beren.boden@gmail.com</a></span></p>
                        <p>P: <span>64+ 21 208 9217</span></p>
                    </div>
                    <div class="footer__content">
                        <h2>Quick Links -</h2>
                        <a href="#showcase-section">Home</a><br />
                        <a href="#project-section">Projects</a><br />
                        <a href="#certification-section">Certifcations</a><br />
                        <a href="#showcase-section">About</a><br />
                        <a href="#contact-section">Contact</a>
                    </div>
                    <div class="footer__content">
                        <h2>Follow Me On -</h2>
                        <i class="fa fa-github"></i><a target="_blank" rel="noopener noreferrer" href="https://github.com/BerenBoden">&nbsp; GitHub</a><br />
                        <i class="fa fa-twitter"></i><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/BerenBoden">&nbsp; Twitter</a><br />
                        <i class="fa fa-linkedin"></i><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/beren-boden-5766ba1a0/">&nbsp; LinkedIn</a><br />
                        <i class="fa fa-stack-overflow"></i><a target="_blank" rel="noopener noreferrer" href="#showcase-section">&nbsp; StackOverflow</a><br />
                    </div>
                    <div class="footer__content">
                        <h2>Availabillity -</h2>
                        <p>I am available for any type of work. <br />
                        Please get in touch with me so we can<br /> 
                        discuss this further.</p>
                    </div>
                </div>
            </div>
            <hr />
            <div class="footer__bottom">
                <p>Made By Beren Boden ©2020</p>
            </div>
        </div>
    )
}

export default Footer
