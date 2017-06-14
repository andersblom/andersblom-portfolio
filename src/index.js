import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

import App from './components/App';
import Welcome from './components/Welcome';
import Category from './components/Category';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar/Sidebar';

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
            
            <Route path="/contact" render={(props) => (<div><Sidebar {...props} /><Contact /></div>)} />
            <Route component={NotFound} />
        </Switch>
      </Router>
    </App>  
  
), document.getElementById('root')
);
