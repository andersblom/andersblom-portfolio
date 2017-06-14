import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

import App from './components/App';
import Welcome from './components/Welcome';
import Category from './components/Category';
import Code from './components/Code';
import NotFound from './components/NotFound';
import Contact from './components/Contact';

// TODO: ReactCSSTransitionGroup for animation
ReactDOM.render((
    <App>
      <Router>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/design" render={(props) => (
                <Category {...props} category="design"/>
            )} /> />
            <Route path="/code" render={(props) => (
                <Category {...props} category="code"/>
            )} /> />
            
            <Route component={NotFound} />
        </Switch>
      </Router>
    </App>  
  
), document.getElementById('root')
);
