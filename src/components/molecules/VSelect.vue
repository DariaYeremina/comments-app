<template>
    <div class="select"
        v-click-outside="hideOptions">
        <VInput @focus="showOptions"
                :placeholder="placeholder"
                @input="filter"
                :icon="inputIcon"
                v-model="chosenOption.name"></VInput>
        <div class="select__options-wrapper"
            v-show="isOptionsActive">
            <p class="select__option"
                v-for="(option, index) in localOptions"
                :key="index"
                @click="select(option)">{{ optionText(option) }}</p>
        </div>
    </div>
</template>

<script>
import VInput from '@/components/atoms/VInput.vue';
import vClickOutside from 'v-click-outside';
import filters from '@/filters/filters';
import carretUp from '@/assets/icons/carretUp.svg';
import carretDown from '@/assets/icons/carretDown.svg';

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
    placeholder: {
      type: String,
      required: false,
    },
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  filters: { ...filters },
  data: () => ({
    isOptionsActive: false,
    chosenOption: {
      id: null,
      name: '',
    },
    localOptions: [],
  }),
  computed: {
    inputIcon() {
      return this.isOptionsActive ? carretUp : carretDown;
    },
  },
  watch: {
    options: {
      handler(val) {
        this.localOptions = val;
      },
      immediate: true,
      deep: true,
    },
  },
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
    optionText(option) {
      return this.itemText === 'fullname' ? this.$options.filters.fullName(option) : option[this.itemText];
    },
    filter() {
      const regex = new RegExp(`${this.chosenOption.name.toLowerCase()}`);
      this.localOptions = this.options.filter((el) => regex.test(el.last_name.toLowerCase()));
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
