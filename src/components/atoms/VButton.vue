<template>
    <button :class="[secondary ? 'button_secondary' : 'button']"
            :disabled="disabled"
            @click="emitClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    secondary: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
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
        &[disabled] {
          background-color: $light_grey;
          cursor: default;
          &:hover {
            color: #fff;
            border-color: transparent;
          }
        }
        &_secondary {
          @extend .button;
          background-color: #fff;
          color: $green;
          border-color: $green;
          &:hover {
            background-color: $green;
            color: #fff;
            border-color: transparent;
          }
        }
    }
</style>
