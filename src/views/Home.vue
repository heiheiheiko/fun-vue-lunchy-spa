<template>
  <LayoutDefaultDynamic>
    <div class="home">
      <a href="#" @click="currentUserLogout"> logout </a>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </LayoutDefaultDynamic>
</template>

<script>
import { mapActions } from 'vuex';
import LayoutDefaultDynamic from '@/layouts/LayoutDefaultDynamic';

export default {
  name: 'Home',
  components: {
    LayoutDefaultDynamic,
  },
  methods: {
    ...mapActions('users', ['currentUserLogout']),
  },
};
</script>
