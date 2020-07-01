<template>
  <LayoutContentCenterDynamic>
    <div>
      <UserFormRegister />
      <router-link to="/login">
        Already have an account? Login.
      </router-link>
    </div>
  </LayoutContentCenterDynamic>
</template>

<script>
import LayoutContentCenterDynamic from '@/layouts/LayoutContentCenterDynamic';
import UserFormRegister from '@/components/UserFormRegister.vue';

export default {
  name: 'UserRegisterPage',
  components: {
    LayoutContentCenterDynamic,
    UserFormRegister,
  },
};
</script>
