/* eslint-disable no-restricted-globals */

export default {
  SET_AUTH_DATA(state, authData) {
    state.authData = authData;
    localStorage.setItem('authData', JSON.stringify(authData));
  },
  LOGOUT() {
    localStorage.removeItem('authData');
    localStorage.removeItem('currentUser');
    location.reload();
  },
};
