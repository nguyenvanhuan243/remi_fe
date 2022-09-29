import axios from 'axios';
import config from '../../../config';

const LikeAPI = {

  // Like movie
  likeMovie: (accessToken, movieID) => {
    const requestUrl = `${config.API_URL}/likes/movies/${movieID}`;
    const authOptions = {
      headers: {
        Authorization: accessToken,
      },
    };
    return axios.post(requestUrl, { status: 1 }, authOptions);
  },

  // Dislike movie
  disLikeMovie: (accessToken, movieID) => {
    const requestUrl = `${config.API_URL}/likes/movies/${movieID}`;
    const authOptions = {
      headers: {
        Authorization: accessToken,
      },
    };
    return axios.post(requestUrl, { status: 0 }, authOptions);
  }

};

export default LikeAPI;
