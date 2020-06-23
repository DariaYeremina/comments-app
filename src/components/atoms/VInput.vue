<template>
    <div class="input__wrapper">
        <label v-if="label"
                class="label">{{ label }}</label>
            <component :is="tag"
                        :type="type"
                        :placeholder="placeholder"
                        :value="value"
                        :name="name"
                        @change="$emit('change')"
                        @blur="$emit('blur')"
                        @focus="$emit('focus')"
                        @input="updateInput($event)"
                        class="input"
                        :class="{'textarea' : tag === 'textarea'}"
                        :style="background"></component>
    </div>
</template>

<script>
export default {
  name: 'VInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
    },
    value: {},
    label: {
      type: String,
    },
    icon: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: 'input',
    },
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    background() {
      return this.icon ? `background-image: url(${this.icon})` : null;
    },
  },
  methods: {
    updateInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
    .input {
      &__wrapper {
        margin-bottom: 20px;
      }
        width: 100%;
        border: 1px solid $light_grey;
        padding: 7px 15px;
        font: inherit;
        border-radius: 4px;
        background-repeat: no-repeat;
        background-position: 98% center;
        background-size: 1.6rem;
        &:focus {
            outline: none;
            border-color: $grey;
        }
    }
    .textarea {
      resize: none;
      height: 150px;
    }
    .label {
        display: block;
        margin-bottom: 10px;
        font-size: $font_m;
    }
</style>
