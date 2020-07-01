<template>
  <div>
    <FormulateForm
      @submit="onSubmit"
    >
      <h2 class="text-2xl mb-2">
        Login
      </h2>
      <FormulateInput
        v-model="username"
        name="username"
        label="Username"
        validation="^required"
      />
      <FormulateInput
        v-model="password"
        type="password"
        name="password"
        label="Password"
        validation="^required"
      />

      <FormulateInput type="submit" />

      <BaseFormErrors
        :error-message="errorMessage"
      />
    </FormulateForm>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import BaseFormErrors from '@/components/BaseFormErrors.vue';

export default {
  components: {
    BaseFormErrors,
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions('users', ['userLogin']),
    onSubmit() {
      this.userLogin({
        username: this.username,
        password: this.password,
      }).then(() => {
        this.$router.push({ name: 'home' });
      }).catch(() => {
        this.errorMessage = 'Username or password is wrong.';
      });
    },
  },
};
</script>

<style>

</style>
