import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Sign/Login';
// import { Container } from './styles';

export default function Routes() {
  return (
    <BrowserRouter> 
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
  );
}
