<template>
  <div class="wrapper">
    <VButton @click="openChangeUserData">{{ $t('buttons.editUserData') }}</VButton>
    <VChangeUserData v-if="changeUserDataVisible"
                    @close="closeChangeUserData"></VChangeUserData>
  </div>
</template>

<script>
import VButton from '@/components/atoms/VButton.vue';
import VChangeUserData from '@/components/molecules/VChangeUserData.vue';

export default {
  name: 'VManageUserData',
  components: { VButton, VChangeUserData },
  data: () => ({
    changeUserDataVisible: false,
  }),
  methods: {
    openChangeUserData() {
      this.changeUserDataVisible = true;
    },
    closeChangeUserData() {
      this.changeUserDataVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    margin: 25px 0;
  }
</style>
