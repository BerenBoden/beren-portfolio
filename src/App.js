import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import ProjectPage from './components/pages/ProjectPage';
import ContactPage from './components/pages/ContactPage';
import Home from './components/home/Home';
import ProjectDetail from './components/pages/ProjectDetail';
import Default from './components/pages/Default';

function App() {
  return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/project-details/:projectId" component={ProjectDetail} />
          <Route path="*" exact={true} component={Default} />
        </Switch>
      </div>
  );
}

export default App;
