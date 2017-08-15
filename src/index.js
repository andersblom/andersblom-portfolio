import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ReactGA from 'react-ga';

import './index.css';

import App from './components/App';
import Welcome from './components/Welcome/Welcome';
import Category from './components/Category/Category';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Sidebar from './components/Sidebar/Sidebar';

ReactGA.initialize('UA-39173255-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render((
    <App>
      <Router onUpdate={logPageView}>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/design" render={(props) => (
                <Category {...props} category="design"/>
            )} /> />
            <Route path="/code" render={(props) => (
                <Category {...props} category="code"/>
            )} /> />
            <Route path="/contact" render={(props) => (<div className="container"><Sidebar {...props} /><div className="contentArea"><Contact /></div></div>)} />
            <Route path="/about" render={(props) => (<div className="container"><Sidebar {...props} /><div className="contentArea"><About /></div></div>)} />
            <Route component={NotFound} />
        </Switch>
      </Router>
    </App>  
  
), document.getElementById('root')
);
