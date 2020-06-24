<template>
  <span v-if="errors && errors.length > 0"
      class="error"><slot></slot></span>
</template>

<script>
export default {
  name: 'VError',
  props: {
    errors: {
      type: [Array, String],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .error {
    font-weight: 700;
    color: $red;
    display: inline-block;
    margin-bottom: 10px;
  }
</style>
