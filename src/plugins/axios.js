/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import Vue from 'vue';
import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
const config = {
  baseURL: 'http://localhost:8000/api/' || '',
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const localAxios = axios.create(config);

localAxios.interceptors.request.use(
  (config) => {
    const authDataString = localStorage.getItem('authData');
    if (!authDataString) { return config; }

    const authData = JSON.parse(authDataString);
    config.headers = {
      Authorization: `Bearer ${authData.token}`,
    };

    return config;
  }, // Do something before request is sent
  (error) => Promise.reject(error), // Do something with request error
);

// Add a response interceptor
localAxios.interceptors.response.use(
  (response) => response.data, // Do something with response data
  (error) => Promise.reject(error), // Do something with response error
);

Plugin.install = function init(Vue) {
  Vue.axios = localAxios;
  window.axios = localAxios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return localAxios;
      },
    },
    $axios: {
      get() {
        return localAxios;
      },
    },
  });
};

Vue.use(Plugin);

export default localAxios;
