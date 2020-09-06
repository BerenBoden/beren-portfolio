import React from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import './Default.scss';

function Default() {
    return (
        <div className="default">
            <Navigation />
                <div className="default__body">
                    <h1>Page not found, sorry!</h1>
                    <a href="/"><button>Return Home</button></a>
                </div>
            <Footer />
        </div>
    )
}

export default Default
