<template>
  <LayoutContentCenterDynamic>
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

      <FormulateForm
        v-model="values"
        @submit="submitted"
      >
        <h2 class="text-2xl mb-2">
          Password reset
        </h2>
        <FormulateInput
          type="password"
          name="password"
          label="New password"
          help="Pick a new password, must have at least 1 number."
          validation="^required|min:5,length|matches:/[0-9]/"
          :validation-messages="{
            matches: 'Password must contain at least 1 number.'
          }"
        />
        <FormulateInput
          type="password"
          name="password_confirm"
          label="Confirm password"
          help="Just re-type what you entered above"
          validation="^required|confirm"
          validation-name="Password confirmation"
        />
        <FormulateInput type="submit" />
      </FormulateForm>

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
  </LayoutContentCenterDynamic>
</template>

<script>
import { mapActions } from 'vuex';
import LayoutContentCenterDynamic from '@/layouts/LayoutContentCenterDynamic';

export default {
  name: 'UserRegisterPage',
  components: {
    LayoutContentCenterDynamic,
  },
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
