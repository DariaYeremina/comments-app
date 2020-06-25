<template>
    <div class="wrapper">
        <VHeading>{{ $t('appTitle') }}</VHeading>
        <VSelect :options="getUsers"
                data-test="v-select"
                :placeholder="$t('select.placeholder')"
                @select="fetchPosts()"></VSelect>
        <VManageUserData v-if="getActiveUserId !== null"
                        data-test="v-manage-user-data"
                        @reload="fetchUsers"></VManageUserData>
        <VPostsList></VPostsList>
    </div>
</template>

<script>
import VHeading from '@/components/atoms/VHeading.vue';
import VSelect from '@/components/molecules/VSelect.vue';
import VPostsList from '@/components/organisms/VPostsList.vue';
import VManageUserData from '@/components/organisms/VManageUserData.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'MainPage',
  components: {
    VHeading, VSelect, VPostsList, VManageUserData,
  },
  computed: {
    ...mapGetters('users', [
      'getUsers',
      'getActiveUserId',
    ]),
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch('posts/getPostsPerUser');
    },
    fetchUsers() {
      this.$store.dispatch('users/getUsers');
    },
  },
  beforeRouteEnter(from, to, next) {
    next((vm) => {
      vm.fetchUsers();
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
