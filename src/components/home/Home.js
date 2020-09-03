import React from 'react';
import './Home.scss';
import Navigation from '../navigation/Navigation';
import Showcase from '../showcase/Showcase';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

function Home() {
  return (
      <div className="Home">
        <Navigation />
        <Showcase />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}

export default Home;