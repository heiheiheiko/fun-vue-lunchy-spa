<template>
  <BaseAlert
    v-if="hasErrors"
    :class="{'mb-2': hasErrors}"
  >
    <template v-if="errorMessage">
      {{ errorMessage }}
    </template>
    <ul v-else>
      <li
        v-for="(error, key) in errors"
        :key="key"
      >
        {{ fieldErrorMessage(key, error) }}
      </li>
    </ul>
  </BaseAlert>
</template>

<script>
import BaseAlert from '@/components/BaseAlert.vue';

export default {
  components: {
    BaseAlert,
  },
  props: {
    errors: {
      type: Object,
      default() { return {}; },
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasErrors() {
      return Object.keys(this.errors).length > 0 || this.errorMessage;
    },
  },
  methods: {
    fieldErrorMessage(key, errors) {
      return `${key.charAt(0).toUpperCase() + key.slice(1)}: ${errors.join(',')}`;
    },
  },
};
</script>
