import axios from 'axios';
import config from '../../../config';

const UserAPI = {
  // Create a user
  create: params => {
    const requestUrl = `${config.API_URL}/users`;
    return axios.post(requestUrl, params);
  },

  // Login user
  login: params => {
    const requestUrl = `${config.API_URL}/users/sign_in`;
    return axios.post(requestUrl, params);
  },

  // Change Password Of User.
  changePassword: (params, accessToken) => {
    const requestUrl = `${config.API_URL}/users/change_password`;
    const authOptions = {
      headers: {
        Authorization: accessToken,
      },
    };
    return axios.post(requestUrl, params, authOptions);
  },

  // Get user by access token
  getUserByAccessToken: accessToken => {
    const requestUrl = `${config.API_URL}/users/me`;
    const authOptions = {
      headers: {
        Authorization: accessToken,
      },
    };
    return axios.get(requestUrl, authOptions);
  },
};

export default UserAPI;
