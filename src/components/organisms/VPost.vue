<template>
    <div class="post">
        <VSubheading>{{ post.title }}</VSubheading>
        <VParagraph>{{ post.body }}</VParagraph>
        <VButton class="post__button"
                  secondary
                  @click="fetchComments">{{ $t('buttons.showComments') }}</VButton>
    </div>
</template>

<script>
import VSubheading from '@/components/atoms/VSubheading.vue';
import VParagraph from '@/components/atoms/VParagraph.vue';
import VButton from '@/components/atoms/VButton.vue';

export default {
  name: 'VPost',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: { VSubheading, VParagraph, VButton },
  methods: {
    fetchComments() {
      this.$store.dispatch('posts/getCommentsPerPost', this.post.id);
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
