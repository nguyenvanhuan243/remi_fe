import axios from 'axios';
import config from '../../../config';

const MovieAPI = {

  // Get movies
  getMovies: (title) => {
    if (title) return axios.get(`${config.API_URL}/movies?title=${title}`);
    return axios.get(`${config.API_URL}/movies`);
  },

  // Create movies
  create: (params, accessToken) => {
    const requestUrl = `${config.API_URL}/movies`;
    const authOptions = {
      headers: {
        Authorization: accessToken,
      },
    };
    return axios.post(requestUrl, params, authOptions);
  }
};

export default MovieAPI;
