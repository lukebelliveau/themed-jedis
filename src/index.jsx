import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import Theme from './common/theme.component.jsx'
import Jedi from './Jedi/jedi.component.jsx'
import JediDetail from './Jedi/jedi-detail.component.jsx'
import data from './jediData';

render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/jedis" component={Jedi} data={data}/>
            <Route path="/jedis/:id" component={JediDetail} data={data}/>
            <Route path="/theme" component={Theme}/>
        </Route>
    </Router>,
    document.getElementById('container')
);
