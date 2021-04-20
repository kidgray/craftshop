import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './components/header/header.component.jsx';
import { ShopPage } from './pages/shop/shop.component.jsx';
import { HomePage } from './pages/homepage/homepage.component.jsx';

export const App = () => (
    <div>
        <Header />
        
        <Switch>
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/' component={HomePage} />
        </Switch>
    </div>
)