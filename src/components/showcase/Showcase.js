import React from 'react';
import Animation from '../animation/Animation';
import './Showcase.scss';
import cv from '../../data/beren-cv.rar'

function Showcase() {
    return (
        <div id="showcase">
            <div className="showcase__left">
                <h1>Web Development & Cyber Security</h1>
                <p>
                Computer science and I.T enthusiast.<br />
                Self taught, front end & back end web developer.<br />
                I'm interested in cyber security as a hobby, but I'm<br />
                currently working towards a career in web development.<br />
                </p>
                <a href={cv} download class="cta">
                    <span>Download My C.V &nbsp;<i style={{fontWeight: "300"}} class="fa fa-arrow-right"></i></span>
                    <svg class="svg-btn" width="13px" height="10px" viewBox="0 0 13 10">
                    </svg>
                </a>
            </div>
            <div className="showcase__right">
                <Animation />
            </div>
        </div>
    )
}

export default Showcase
