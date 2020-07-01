<template>
  <div>
    <FormulateForm
      @submit="onSubmit"
    >
      <h2 class="text-2xl mb-2">
        Register
      </h2>
      <FormulateInput
        v-model="username"
        name="username"
        label="Username"
        validation="^required"
      />
      <FormulateInput
        v-model="email"
        name="email"
        label="Email"
        type="email"
        validation="^required"
      />
      <FormulateInput
        v-model="password"
        type="password"
        name="password"
        label="New password"
        validation="^required"
      />
      <FormulateInput
        type="password"
        name="password_confirm"
        label="Confirm password"
        validation="^required|confirm"
        validation-name="Password confirmation"
      />

      <FormulateInput type="submit" />

      <BaseFormErrors
        :errors="errors"
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
      email: '',
      password: '',
      errors: {},
    };
  },
  methods: {
    ...mapActions('users', ['userRegister']),
    onSubmit() {
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

<style>

</style>
