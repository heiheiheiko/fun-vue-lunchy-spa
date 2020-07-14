import Vue from 'vue';
import { usersApi } from '@/configs/apis';

export default {
  accessTokenFetch({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      Vue.axios
        .post(`${usersApi}/authenticate`, credentials)
        .then(({ data }) => {
          commit('SET_AUTH_DATA', data);
          resolve(data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
  currentUserFetch({ commit }) {
    return Vue.axios
      .get(`${usersApi}/current`)
      .then(({ data }) => {
        commit('SET_CURRENT_USER', data);
      })
      .catch((error) => console.log(error));
  },
  userRegister({ commit, dispatch }, credentials) {
    return Vue.axios
      .post(usersApi, { user: credentials })
      .then(({ data }) => {
        commit('SET_CURRENT_USER', data);
        dispatch('accessTokenFetch', { user: credentials });
      });
  },
  userLogin({ dispatch }, credentials) {
    return new Promise((resolve, reject) => {
      dispatch('accessTokenFetch', credentials)
        .then((accessTokenData) => {
          dispatch('currentUserFetch');
          resolve(accessTokenData);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
  currentUserLogout({ commit }) {
    commit('LOGOUT');
  },
};
