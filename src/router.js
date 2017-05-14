import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute, Switch } from 'react-router-dom';

import App from './components/App';
import Sidebar from './components/Sidebar';
import Design from './components/Design';
import Work from './components/Work';
import Welcome from './components/Welcome';
import Code from './components/Code';



const routes = (
    <Router>
        
        <Switch>
            <Route component={App}>
            
                <Route path="/" component={Welcome} />
            
            </Route>
        </Switch>
    </Router>
);

export default routes;