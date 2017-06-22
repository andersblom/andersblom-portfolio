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

// TODO: favicon!!1
// TODO: ReactCSSTransitionGroup for animation
// TODO: Split components into folders w/css for modularizing the CSS along with components
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
            {/*TODO: Contact doesnt have the container class around the sidebar + contact component. 
            Might have to move the whole welcome section to a Neutral.js component to wrap this properly.*/}
            <Route path="/contact" render={(props) => (<div><Sidebar {...props} /><Contact /></div>)} />
            <Route component={NotFound} />
        </Switch>
      </Router>
    </App>  
  
), document.getElementById('root')
);
