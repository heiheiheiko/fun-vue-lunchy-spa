<template>
  <div class="home">
    <a href="#" @click="currentUserLogout"> logout </a>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  methods: {
    ...mapActions('users', ['currentUserLogout']),
  },
};
</script>
