<template>
    <div class="input__wrapper">
        <label v-if="label"
                class="label">{{ label }}</label>
        <ValidationProvider :vid="$attrs.name"
                            :name="$attrs.name"
                            :rules="rules"
                            v-slot="{ errors }">
            <component :is="tag"
                        :type="type"
                        :placeholder="placeholder"
                        :value="value"
                        v-bind="$attrs"
                        @change="$emit('change')"
                        @blur="$emit('blur')"
                        @focus="$emit('focus')"
                        @input="updateInput($event)"
                        class="input"
                        :class="{'textarea' : tag === 'textarea'}"
                        :style="background"></component>
            <span v-if="errors && errors.length > 0"
                    class="error">{{ errors[0] }}</span>
         </ValidationProvider>
    </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

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
    rules: {
      type: [Object, String],
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: 'input',
    },
  },
  components: { ValidationProvider },
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
    .error {
        font-weight: 700;
        color: $red;
        display: inline-block;
        margin-top: 5px;
    }
</style>
