import React from 'react';
import { Route } from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage.component.jsx';

const HatsPage = () => (
    <div>
        <h1>This is the Hats page</h1>
    </div>
);

export const App = () => (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
    </div>
)