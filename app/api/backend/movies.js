import axios from 'axios';
import config from '../../../config';

const MovieAPI = {

  getMovies: () => {
    return axios.get(`${config.API_BASE_URL}/api/v1/movies`);
  },

  create: (params, accessToken) => {
    const requestUrl = `${config.API_BASE_URL}/api/v1/movies`;
    const authOptions = {
      headers: {
        Authorization: accessToken,
      },
    };
    return axios.post(requestUrl, params, authOptions);
  },
  likeMovie: (params, accessToken) => {
    const requestUrl = `${config.API_BASE_URL}/api/v1/reactions`;
    const authOptions = {
      headers: {
        Authorization: accessToken,
      },
    };
    return axios.post(requestUrl, params, authOptions);
  },
};

export default MovieAPI;
