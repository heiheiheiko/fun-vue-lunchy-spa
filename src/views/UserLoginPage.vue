<template>
  <LayoutContentCenterDynamic>
    <div>
      <UserFormLogin />
      <router-link to="/register">
        Don't have an account? Register.
      </router-link>
    </div>
  </LayoutContentCenterDynamic>
</template>

<script>
import { mapActions } from 'vuex';
import LayoutContentCenterDynamic from '@/layouts/LayoutContentCenterDynamic';
import UserFormLogin from '@/components/UserFormLogin.vue';

export default {
  name: 'UserLoginPage',
  components: {
    LayoutContentCenterDynamic,
    UserFormLogin,
  },
};
</script>

<style scoped>
</style>
