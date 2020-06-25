<template>
  <VModal @close="close">
    <template slot="content">
      <VSubheading>{{ error.message }}</VSubheading>
    </template>
  </VModal>
</template>

<script>
import VModal from '@/components/templates/VModal.vue';
import VSubheading from '@/components/atoms/VSubheading.vue';

export default {
  name: 'VWarning',
  components: { VModal, VSubheading },
  computed: {
    error() {
      return this.$store.getters['common/getResponseError'];
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>

</style>
