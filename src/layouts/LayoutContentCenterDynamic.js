import LayoutContentCenter from './LayoutContentCenter.vue';

export default {
  name: 'LayoutContentCenter',
  created() {
    this.$parent.$emit('update:layout', LayoutContentCenter);
  },
  render() {
    return this.$slots.default[0];
  },
};
