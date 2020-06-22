<template>
    <div class="post">
        <VSubheading>{{ post.title }}</VSubheading>
        <VParagraph>{{ post.body }}</VParagraph>
        <VComment v-for="(comment, index) in comments"
                  :key="index"
                  :comment="comment"></VComment>
        <VButton class="post__button"
                  secondary
                  @click="manageComments">{{ buttonTitle }}</VButton>
        <VAddComment v-if="addCommentVisible"
                    @close="addCommentVisible = false"></VAddComment>
    </div>
</template>

<script>
import VSubheading from '@/components/atoms/VSubheading.vue';
import VParagraph from '@/components/atoms/VParagraph.vue';
import VButton from '@/components/atoms/VButton.vue';
import VComment from '@/components/molecules/VComment.vue';
import VAddComment from '@/components/molecules/VAddComment.vue';

export default {
  name: 'VPost',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: {
    VSubheading, VParagraph, VButton, VComment, VAddComment,
  },
  data: () => ({
    comments: [],
    areComponentsVisible: false,
    addCommentVisible: false,
  }),
  computed: {
    buttonTitle() {
      return this.areComponentsVisible ? this.$t('buttons.addComment') : this.$t('buttons.showComments');
    },
  },
  methods: {
    manageComments() {
      if (this.areComponentsVisible) {
        this.addCommentVisible = true;
      } else {
        this.$store.dispatch('posts/getCommentsPerPost', this.post.id)
          .then(({ data }) => {
            this.comments = data.result;
            this.areComponentsVisible = true;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .post {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid $light_grey;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 5px 15px 15px;
    &__button {
      align-self: flex-end;
    }
  }
</style>
