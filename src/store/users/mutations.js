/* eslint-disable no-restricted-globals */

export default {
  SET_AUTH_DATA(state, authData) {
    state.authData = authData;
    localStorage.setItem('authData', JSON.stringify(authData));
  },
  SET_CURRENT_USER(state, currentUser) {
    state.currentUser = currentUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  },
  LOGOUT() {
    localStorage.removeItem('authData');
    localStorage.removeItem('currentUser');
    location.reload();
  },
};
