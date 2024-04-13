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

  setCurrentUser(data) {
    return localStorage.setItem("currentUser", JSON.stringify(data))
  },

  getCurrentUser() {
    return JSON.parse(
      localStorage.getItem("currentUser")
    )
  },

  removeCurrentUser() {
    return localStorage.removeItem('currentUser');
  }

};

export default UserUtils;

