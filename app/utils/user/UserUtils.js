const UserUtils = {

  getAccessToken() {
    return localStorage.getItem('accessToken');
  },

  setAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken);
  },

  removeAccessToken() {
    return localStorage.removeItem('accessToken');
  },

};

export default UserUtils;

