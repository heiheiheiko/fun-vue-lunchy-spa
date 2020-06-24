<template>
  <div>
    <form @submit.prevent="register">
      <label for="username">
        username:
      </label>
      <input
        v-model="username"
        type="text"
        username="username"
        value
      >

      <label for="email">
        Email:
      </label>
      <input
        v-model="email"
        type="email"
        username="email"
        value
      >

      <label for="password">
        Password:
      </label>
      <input
        v-model="password"
        type="password"
        username="password"
        value
      >

      <button
        type="submit"
        username="button"
      >
        Register
      </button>

      <ul>
        <li
          v-for="(error, index) in errors"
          :key="index"
        >
          {{ error }}
        </li>
      </ul>

      <router-link to="/login">
        Already have an account? Login.
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
      email: '',
      password: '',
      errors: null,
    };
  },
  methods: {
    ...mapActions('users', ['userRegister']),
    register() {
      this.userRegister({
        username: this.username,
        email: this.email,
        password: this.password,
      }).then(() => {
        this.$router.push({ name: 'home' });
      }).catch((err) => {
        this.errors = err.response.data.errors;
      });
    },
  },
};
</script>

<style scoped>
</style>
