import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from './pages/Login';
import Home from './pages/Home';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('email') ? (
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
        <Route path='/login' component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}
