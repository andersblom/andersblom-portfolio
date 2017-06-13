import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';

import './index.css';

import App from './components/App';
import Welcome from './components/Welcome';
import Design from './components/Design';
import Code from './components/Code';

ReactDOM.render((
    <App>
      <Router>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/design" component={Design} />
            <Route path="/code" component={Code} />
            {/*TODO: Add 404 route here*/}
        </Switch>
      </Router>
    </App>  
  
), document.getElementById('root')
);
