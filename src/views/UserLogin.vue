<template>
  <div>
    <form @submit.prevent="login">
      <label for="username">
        username:
      </label>
      <input
        v-model="username"
        type="username"
        name="username"
        value
      >

      <label for="password">
        Password:
      </label>
      <input
        v-model="password"
        type="password"
        name="password"
        value
      >

      <button
        type="submit"
        name="button"
      >
        Login
      </button>
      <p>{{ error }}</p>
      <router-link to="/register">
        Don't have an account? Register.
      </router-link>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: null,
    };
  },
  methods: {
    ...mapActions('users', ['userLogin']),
    login() {
      this.userLogin({
        username: this.username,
        password: this.password,
      }).then(() => {
        this.$router.push({ name: 'home' });
      }).catch((err) => {
        this.error = err.response.data.error;
      });
    },
  },
};
</script>

<style scoped>
</style>
