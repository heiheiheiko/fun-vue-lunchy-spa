<template>
  <LayoutDefaultDynamic>
    no content
  </LayoutDefaultDynamic>
</template>

<script>
import { mapActions } from 'vuex';
import LayoutDefaultDynamic from '@/layouts/LayoutDefaultDynamic';

export default {
  name: 'HomePage',
  components: {
    LayoutDefaultDynamic,
  },
  methods: {
    ...mapActions('users', ['currentUserLogout']),
  },
};
</script>
