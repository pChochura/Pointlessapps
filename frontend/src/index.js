import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import './css/main.css';
import './css/home.css';
import './css/projects.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Projects from './components/Projects/Projects';

const routing = (
  <Router className="dark">
  <div className="backgroundImage"></div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/projects" component={Projects}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);