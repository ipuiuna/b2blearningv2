import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path='/' component={Home} exact={true} />
        <PrivateRoute path='/cart' component={Cart} />
        <PrivateRoute path='/checkout' component={Checkout} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}
