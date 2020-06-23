<template>
    <ValidationObserver ref="obs">
        <VModal @close="close">

        </VModal>
    </ValidationObserver>
</template>

<script>
import VModal from '@/components/templates/VModal.vue';
import VSubheading from '@/components/atoms/VSubheading.vue';
import VButton from '@/components/atoms/VButton.vue';
import VInput from '@/components/atoms/VInput.vue';
import VError from '@/components/atoms/VError.vue';
import { mapFields } from 'vuex-map-fields';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  name: 'VChangeUserData',
  components: {
    VModal, VSubheading, VInput, VButton, VError, ValidationObserver, ValidationProvider,
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
