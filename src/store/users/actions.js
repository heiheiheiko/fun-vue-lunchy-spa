import Vue from 'vue';
import { usersApi } from '@/configs/apis';
import User from '@/models/User';

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
  userRegister({ dispatch }, credentials) {
    return Vue.axios
      .post(usersApi, { user: credentials })
      .then(({ data }) => {
        User.insert({ data: { ...data, isCurrentUser: true } });
        dispatch('accessTokenFetch', { user: credentials });
      });
  },
  userLogin({ dispatch }, credentials) {
    return new Promise((resolve, reject) => {
      dispatch('accessTokenFetch', credentials)
        .then((accessTokenData) => {
          User.api().current();
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
