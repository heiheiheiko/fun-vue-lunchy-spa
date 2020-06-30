<template>
  <div>
    <AppNavigation />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppNavigation from '@/layouts/AppNavigation.vue';
import AppFooter from '@/layouts/AppFooter.vue';

export default {
  components: {
    AppNavigation,
    AppFooter,
  },
};
</script>
