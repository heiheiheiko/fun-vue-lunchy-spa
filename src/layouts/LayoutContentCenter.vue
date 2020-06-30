<template>
  <div class="bg-gray-200 h-screen">
    <AppNavigation />
    <main
      class="cursor-default flex justify-center items-center mt-24"
    >
      <div
        class="bg-white shadow-lg rounded-lg w-10/12 md:w-1/2 lg:w-1/3 xl:w-1/4"
      >
        <div class="p-6">
          <slot />
        </div>
      </div>
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
