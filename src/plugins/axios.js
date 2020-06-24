/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import Vue from 'vue';
import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const localAxios = axios.create(config);

localAxios.interceptors.request.use(
  (config) => config, // Do something before request is sent
  (error) => Promise.reject(error), // Do something with request error
);

// Add a response interceptor
localAxios.interceptors.response.use(
  (response) => response, // Do something with response data
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

export default Plugin;
