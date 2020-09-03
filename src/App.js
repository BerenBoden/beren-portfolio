import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import ProjectPage from './components/pages/ProjectPage';
import ContactPage from './components/pages/ContactPage';
import Home from './components/home/Home';
import ProjectDetail from './components/pages/ProjectDetail';

function App() {
  return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/project-details" component={ProjectDetail} />
        </Switch>
      </div>
  );
}

export default App;
