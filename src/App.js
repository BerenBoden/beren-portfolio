import React from 'react';
import ContactPage from './components/pages/ContactPage';
import Home from './components/home/Home';
import Default from './components/pages/Default';
import ProjectPage from './components/pages/ProjectPage';
import {Switch, Route} from 'react-router-dom';

const App = () => {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="*" exact={true} component={Default} />
        </Switch>
      </div>
    )
}

export default App;