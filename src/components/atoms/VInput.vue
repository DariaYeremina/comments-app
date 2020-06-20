<template>
    <div>
        <label v-if="label"
                class="label">{{ label }}</label>
        <ValidationProvider :vid="$attrs.name"
                            :name="$attrs.name"
                            :rules="rules"
                            v-slot="{ errors }"
                            :mode="$attrs.mode">
            <input :type="type"
                    :placeholder="placeholder"
                    :value="value"
                    v-bind="$attrs"
                    @focus="$emit('focus')"
                    @input="updateInput($event)"
                    class="input"/>
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
  },
  components: { ValidationProvider },
  methods: {
    updateInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
    .input {
        width: 100%;
        border: 1px solid $light_grey;
        padding: 7px 15px;
        font: inherit;
        border-radius: 4px;
        &:focus {
            outline: none;
            border-color: $grey;
        }
    }
    .label {
        display: block;
        margin-bottom: 10px;
        font-size: $font_m;
    }
    .error {
        font-weight: 700;
        color: $red;
    }
</style>
