<template>
    <button class="button"
            @click="emitClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'VButton',
  methods: {
    emitClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
    .button {
        font: inherit;
        font-size: $font_m;
        background-color: $green;
        color: #fff;
        border: 1px solid transparent;
        padding: 10px 25px;
        outline: none;
        cursor: pointer;
        border-radius: 20px;
        transition: .3s all linear;
        &:hover {
          color: $green;
          border-color: $green;
          background-color: #fff;
        }
    }
</style>
