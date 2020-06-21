<template>
    <div class="post">
        <VSubheading>{{ post.title }}</VSubheading>
        <VParagraph>{{ post.body }}</VParagraph>
    </div>
</template>

<script>
import VSubheading from '@/components/atoms/VSubheading.vue';
import VParagraph from '@/components/atoms/VParagraph.vue';

export default {
  name: 'VPost',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: { VSubheading, VParagraph },
};
</script>

<style lang="scss" scoped>
  .post {
    width: 100%;
    border: 1px solid $light_grey;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 5px 15px;
  }
</style>
