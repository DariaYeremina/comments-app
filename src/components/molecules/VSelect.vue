<template>
    <div class="select"
        v-click-outside="hideOptions">
        <VInput @focus="showOptions"
                :value="chosenOption.name"></VInput>
        <div class="select__options-wrapper"
            v-show="isOptionsActive">
            <p class="select__option"
                v-for="(option, index) in options"
                :key="index"
                @click="select(option)">{{ optionText(option) }}</p>
        </div>
    </div>
</template>

<script>
import VInput from '@/components/atoms/VInput.vue';
import vClickOutside from 'v-click-outside';

export default {
  name: 'VSelect',
  components: { VInput },
  props: {
    options: {
      required: true,
      type: Array,
    },
    value: {},
    itemText: {
      type: String,
      default: 'fullname',
    },
    itemId: {
      type: String,
      default: 'id',
    },
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data: () => ({
    isOptionsActive: false,
    chosenOption: {
      id: null,
      name: null,
    },
  }),
  methods: {
    showOptions() {
      this.isOptionsActive = true;
    },
    hideOptions() {
      this.isOptionsActive = false;
    },
    select(option) {
      this.chosenOption = {
        id: option[this.itemId],
        name: this.optionText(option),
      };
      this.$emit('input', this.chosenOption.id);
      this.hideOptions();
    },
    fullName(option) {
      return `${option.first_name} ${option.last_name}`;
    },
    optionText(option) {
      return this.itemText === 'fullname' ? this.fullName(option) : option[this.itemText];
    },
  },
};
</script>

<style lang="scss" scoped>
    .select {
        width: 50%;
        position: relative;
        &__options-wrapper {
            position: absolute;
            width: 100%;
            border: 1px solid $light_grey;
            padding: 5px 0;
            max-height: 400px;
            overflow-y: auto;
        }
        &__option {
            padding: 10px;
            margin: 0;
            cursor: default;
            &:hover {
                background: $light_grey;
            }
        }
    }
</style>
