<template>
    <div class="wrapper">
        <VHeading>{{ $t('appTitle') }}</VHeading>
        <VSelect :options="users"
                :placeholder="$t('select.placeholder')"
                @select="fetchPosts($event)"></VSelect>
        <PostsList></PostsList>
    </div>
</template>

<script>
import VHeading from '@/components/atoms/VHeading.vue';
import VSelect from '@/components/molecules/VSelect.vue';
import PostsList from '@/components/organisms/PostsList.vue';

export default {
  name: 'MainPage',
  components: { VHeading, VSelect, PostsList },
  computed: {
    users() {
      return this.$store.getters['users/getUsers'];
    },
  },
  methods: {
    fetchPosts(event) {
      this.$store.dispatch('posts/getPostsPerUser', event);
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
