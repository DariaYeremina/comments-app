<template>
    <div class="comment">
        <div class="comment__header">
            <VTitle class="comment__title">{{ comment.name }}</VTitle>
            <VHint>{{ comment.email }}</VHint>
        </div>
        <VParagraph>{{ comment.body }}</VParagraph>
    </div>
</template>

<script>
import VParagraph from '@/components/atoms/VParagraph.vue';
import VTitle from '@/components/atoms/VTitle.vue';
import VHint from '@/components/atoms/VHint.vue';

export default {
  name: 'VComment',
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  components: { VParagraph, VTitle, VHint },
};
</script>

<style lang="scss" scoped>
    .comment {
        border-top: 1px solid $light_grey;
        margin-bottom: 15px;
        padding-top: 15px;
        &__header {
            display: flex;
            align-items: center;
        }
        &__title {
            margin-right: 15px;
        }
    }
</style>
