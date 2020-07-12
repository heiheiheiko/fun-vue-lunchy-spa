<template>
  <div>
    <FormulateForm
      @submit="onSubmit"
    >
      <h2 class="text-2xl mb-2">
        Login
      </h2>
      <FormulateInput
        v-model="email"
        name="email"
        label="Email"
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
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions('users', ['userLogin']),
    onSubmit() {
      this.userLogin({
        user: {
          email: this.email,
          password: this.password,
        },
      }).then(() => {
        this.$router.push({ name: 'home' });
      }).catch(() => {
        this.errorMessage = 'email or password is wrong.';
      });
    },
  },
};
</script>

<style>

</style>
