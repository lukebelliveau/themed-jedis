import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import Theme from './common/theme.component.jsx'
import Jedi from './Jedi/jedi.component.jsx'
import JediDetail from './Jedi/jedi-detail.component.jsx'

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

const data = [
    {
        id: 1,
        name: 'Luke Skywalker',
        title: 'Jedi Master',
        birthplace: 'Tattooine',
        fate: "A Jedi's fate",
        media: 'https://i2-prod.mirror.co.uk/incoming/article9603913.ece/ALTERNATES/s1200/PROD-Luke-Skywalker-in-Star-Wars-film.jpg',

    },
    {
        id: 2,
        name: 'Obi-Wan Kenobi',
        title: 'Jedi Master',
        birthplace: 'Stewjon',
        fate: "Killed by Darth Vader",
        media: 'https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2017/08/18143622/Alec-Guinness-Star-Wars.jpg',
    },
    {
        id: 3,
        name: 'Darth Vader',
        title: 'Tattooine',
        birthplace: 'Stewjon',
        fate: "Sacrificed himself",
        media: 'https://i.amz.mshcdn.com/-dQYWk5QJDW5xQeoqx8-JbPxaws=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F414248%2Ff129d0ca-4149-4d9a-a933-605378d91f2b.jpg',
    },
    {
        id: 4,
        name: 'Rey',
        title: 'Jedi, scavenger',
        birthplace: 'Jakku',
        fate: "TBD",
        media: 'https://lumiere-a.akamaihd.net/v1/images/rey-main_73d146de.jpeg?region=0%2C0%2C1560%2C878&width=768',
    },
    {
        id: 5,
        name: 'Kylo Ren',
        title: 'Sith',
        birthplace: 'Chandrila',
        fate: "TBD",
        media: 'https://i.amz.mshcdn.com/uc3VRBSz-4hLwWXrpxiEYBzKqr0=/950x534/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fstory%2Fthumbnail%2F43431%2F731ad579-649b-4e25-b1b8-d0a78e7461ec.png',
    },
];
