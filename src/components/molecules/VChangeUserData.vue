<template>
    <ValidationObserver ref="obs">
        <VModal @close="close">
          <template slot="title">
            <VSubheading>{{ $t('changeUserData.title') }}</VSubheading>
          </template>
          <template slot="content">
            <form>
              <ValidationProvider name="nameField"
                                  rules="required|name"
                                  v-slot="{ errors }">
                <VInput :placeholder="$t('placeholders.name')"
                        :label="$t('labels.name')"
                        v-model="first_name"
                        name="firstName"
                        rules="required|name"></VInput>
                <VError :errors="errors">{{ errors[0] }}</VError>
              </ValidationProvider>
              <ValidationProvider name="lastName"
                                  rules="required|name"
                                  v-slot="{ errors }">
                <VInput :placeholder="$t('placeholders.lastName')"
                        :label="$t('labels.lastName')"
                        v-model="last_name"
                        name="lastName"
                        rules="required|name"></VInput>
                <VError :errors="errors">{{ errors[0] }}</VError>
              </ValidationProvider>
            </form>
          </template>
          <template slot="actions">
            <VButton :disabled="isDisabled"
                     @click="overwriteUserData">{{ $t('buttons.save') }}</VButton>
          </template>
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
  data: () => ({
    isDisabled: false,
  }),
  computed: {
    ...mapFields('users', [
      'userData.first_name',
      'userData.last_name',
    ]),
  },
  methods: {
    close() {
      this.$emit('close');
    },
    overwriteUserData() {
      this.$refs.obs.validate()
        .then((valid) => {
          if (valid) {
            this.isDisabled = true;
            this.$store.dispatch('users/updateUserData')
              .then(() => {
                this.$emit('reload');
                this.close();
              })
              .finally(() => {
                this.isDisabled = false;
              });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
