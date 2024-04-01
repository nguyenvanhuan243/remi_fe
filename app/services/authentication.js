import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import UserUtils from '../utils/user/UserUtils';

const checkAuth = () => {
  const accessToken = UserUtils.getAccessToken();
  if (!accessToken) return false;
  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => checkAuth() ? <Component {...props} /> : <Redirect to="/" />}
  />
);
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export { PrivateRoute };
