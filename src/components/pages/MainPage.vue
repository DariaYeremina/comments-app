<template>
    <div class="wrapper">
        <VHeading>{{ $t('appTitle') }}</VHeading>
        <VSelect :options="getUsers"
                :placeholder="$t('select.placeholder')"
                @select="fetchPosts()"></VSelect>
        <VPostsList></VPostsList>
    </div>
</template>

<script>
import VHeading from '@/components/atoms/VHeading.vue';
import VSelect from '@/components/molecules/VSelect.vue';
import VPostsList from '@/components/organisms/VPostsList.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'MainPage',
  components: { VHeading, VSelect, VPostsList },
  computed: {
    ...mapGetters('users', [
      'getUsers',
    ]),
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch('posts/getPostsPerUser');
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
