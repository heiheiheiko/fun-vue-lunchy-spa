<template>
  <component :is="layout">
    <router-view :layout.sync="layout" />
  </component>
</template>

<script>
import Order from '@/models/Order';
import User from '@/models/User';

export default {
  name: 'App',
  data() {
    return {
      layout: 'div',
    };
  },
  created() {
    Order.api().index();
  },
};
</script>
