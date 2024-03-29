import axios from 'axios';
import config from '../../../config';

const UserAPI = {
  // Create a user
  create: params => {
    const requestUrl = `${config.API_BASE_URL}/api/v1//users`;
    return axios.post(requestUrl, params);
  },

  // Login user
  login: params => {
    const requestUrl = `${config.API_BASE_URL}/api/v1/users/sign_in`;
    return axios.post(requestUrl, params);
  },

  // Get user by access token
  getUserByAccessToken: accessToken => {
    const requestUrl = `${config.API_BASE_URL}/api/v1/users/me`;
    const authOptions = {
      headers: {
        Authorization: accessToken,
      },
    };
    return axios.get(requestUrl, authOptions);
  },
};

export default UserAPI;
