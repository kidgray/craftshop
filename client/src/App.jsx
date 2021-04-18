import React from 'react';
import { Route } from 'react-router-dom';

import { ShopPage } from './pages/shop/shop.component.jsx';
import { HomePage } from './pages/homepage/homepage.component.jsx';

export const App = () => (
    <div>
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/' component={HomePage} />
    </div>
)