import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

import App from './components/App';
import Welcome from './components/Welcome/Welcome';
import Category from './components/Category/Category';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Sidebar/Sidebar';

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
            <Route path="/contact" render={(props) => (<div className="container"><Sidebar {...props} /><div className="contentArea"><Contact /></div></div>)} />
            <Route component={NotFound} />
        </Switch>
      </Router>
    </App>  
  
), document.getElementById('root')
);
