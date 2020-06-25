import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const authDataString = localStorage.getItem('authData');
    if (authDataString) {
      const authData = JSON.parse(authDataString);
      this.$store.commit('users/SET_AUTH_DATA', authData);
    }
    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString) {
      const currentUserData = JSON.parse(currentUserString);
      this.$store.commit('users/SET_CURRENT_USER', currentUserData);
    }

    (Vue as any).axios.interceptors.response.use(
      (response: any) => response,
      (error: any) => {
        if (error.response.status === 401) {
          this.$store.dispatch('logout');
        }
        return Promise.reject(error);
      },
    );
  },
  render: (h) => h(App),
}).$mount('#app');
