import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

import App from './components/App';
import Welcome from './components/Welcome';
import Design from './components/Design';
import Code from './components/Code';
import NotFound from './components/NotFound';

// TODO: ReactCSSTransitionGroup for animation
// TODO: Refresh -> 404. Consider catch-all: https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually
ReactDOM.render((
    <App>
      <Router>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/design" component={Design} />
            <Route path="/code" component={Code} />
            <Route component={NotFound} />
        </Switch>
      </Router>
    </App>  
  
), document.getElementById('root')
);
