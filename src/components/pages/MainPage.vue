<template>
    <div class="wrapper">
        <VHeading>{{ $t('appTitle') }}</VHeading>
        <VSelect :options="users"
                v-model="chosenOption"></VSelect>
    </div>
</template>

<script>
import VHeading from '@/components/atoms/VHeading.vue';
import VSelect from '@/components/molecules/VSelect.vue';

export default {
  name: 'MainPage',
  components: { VHeading, VSelect },
  data: () => ({
    chosenOption: null,
  }),
  computed: {
    users() {
      return this.$store.getters['users/getUsers'];
    },
  },
  beforeRouteEnter(from, to, next) {
    next((vm) => {
      vm.$store.dispatch('users/getUsers');
    });
  },
};
</script>

<style lang="scss" scoped>
    .wrapper {
        width: 70vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
