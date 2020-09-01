import React from 'react';
import './App.scss';
import Navigation from './components/navigation/Navigation';
import Showcase from './components/showcase/Showcase';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Showcase />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
