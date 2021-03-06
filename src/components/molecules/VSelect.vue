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
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'VSelect',
  components: { VInput },
  props: {
    options: {
      required: true,
      type: Array,
    },
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
      name: '',
    },
    localOptions: [],
  }),
  computed: {
    inputIcon() {
      return this.isOptionsActive ? carretUp : carretDown;
    },
    ...mapFields('users', [
      'activeUserId',
      'userData.first_name',
      'userData.last_name',
    ]),
  },
  watch: {
    options: {
      handler(val) {
        this.localOptions = val;
        if (this.activeUserId != null) {
          const activeItem = this.localOptions.find((el) => el[this.itemId] === this.activeUserId);
          this.chosenOption.name = this.optionText(activeItem);
        }
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
        name: this.optionText(option),
      };
      this.activeUserId = option[this.itemId];
      this.first_name = option.first_name;
      this.last_name = option.last_name;
      this.$emit('select');
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
        margin-bottom: 10px;
        &__options-wrapper {
            position: absolute;
            width: 100%;
            border: 1px solid $light_grey;
            padding: 5px 0;
            max-height: 400px;
            overflow-y: auto;
            background: #fff;
            z-index: 5;
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
