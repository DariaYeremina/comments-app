<template>
    <div class="list">
        <VPost v-for="(post, index) in visiblePosts"
                :key="index"
                :post="post"></VPost>
        <VButton v-if="nextButtonVisible"
                @click="showNextPost">{{ $t('buttons.nextPost') }}</VButton>
    </div>
</template>

<script>
import VPost from '@/components/organisms/VPost.vue';
import VButton from '@/components/atoms/VButton.vue';

export default {
  name: 'VPostsList',
  components: { VPost, VButton },
  data: () => ({
    visiblePosts: [],
    lastIndex: null,
  }),
  computed: {
    posts() {
      return this.$store.getters['posts/getPostsPerUser'];
    },
    hasNextPost() {
      return this.posts.length > this.lastIndex + 1;
    },
    nextButtonVisible() {
      return this.visiblePosts.length > 0 && this.hasNextPost;
    },
  },
  watch: {
    posts: {
      handler(val) {
        if (val.length > 0) {
          this.resetData();
          this.visiblePosts.push(val[0]);
          this.lastIndex = 0;
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    resetData() {
      this.visiblePosts = [];
      this.lastIndex = null;
    },
    showNextPost() {
      if (this.hasNextPost) {
        this.visiblePosts.push(this.posts[this.lastIndex + 1]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
    margin-top: 30px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}
</style>
