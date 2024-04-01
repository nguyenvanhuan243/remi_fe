import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import UserUtils from '../utils/user/UserUtils';

const checkAuth = () => {
  const accessToken = UserUtils.getAccessToken();
  if (!accessToken) return false;
  return true;
};

const PrivateLink = ({ to, children }) => (
  checkAuth() ? (
    <a href={to}>{children}</a>
  ) : (
    <Redirect to="/" />
  )
);

PrivateLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { PrivateLink };
