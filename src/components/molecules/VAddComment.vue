<template>
  <ValidationObserver ref="obs">
    <VModal @close="close">
      <template slot="title">
          <VSubheading>{{ $t('addComment.title') }}</VSubheading>
      </template>
      <template slot="content">
        <form>
          <ValidationProvider name="nameField"
                              rules="required|name"
                              v-slot="{ errors }">
            <VInput :placeholder="$t('placeholders.name')"
                    :label="$t('labels.name')"
                    v-model="name"
                    name="nameField"
                    rules="required|name"></VInput>
            <VError :errors="errors">{{ errors[0] }}</VError>
          </ValidationProvider>
          <ValidationProvider name="emailField"
                              rules="required|email"
                              v-slot="{ errors }">
            <VInput :placeholder="$t('placeholders.email')"
                    :label="$t('labels.email')"
                    v-model="email"
                    name="emailField"
                    type="email"
                    rules="required|email"></VInput>
            <VError :errors="errors">{{ errors[0] }}</VError>
          </ValidationProvider>
          <ValidationProvider name="commentField"
                              rules="required|regularField"
                              v-slot="{ errors }">
            <VInput :placeholder="$t('placeholders.comment')"
                    :label="$t('labels.comment')"
                    tag="textarea"
                    v-model="body"
                    name="commentField"
                    rules="required|regularField"></VInput>
            <VError :errors="errors">{{ errors[0] }}</VError>
          </ValidationProvider>
        </form>
      </template>
      <template slot="actions">
          <VButton :disabled="isDisabled"
                  @click="addComment">{{ $t('buttons.add') }}</VButton>
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
  name: 'VAddComment',
  components: {
    VModal, VSubheading, VInput, VButton, VError, ValidationObserver, ValidationProvider,
  },
  props: {
    postId: {
      type: [Number, String],
      required: true,
    },
  },
  data: () => ({
    isDisabled: false,
  }),
  computed: {
    ...mapFields('posts', [
      'comment.name',
      'comment.email',
      'comment.body',
      'comment.post_id',
    ]),
  },
  methods: {
    close() {
      this.$emit('close');
    },
    addComment() {
      this.post_id = this.postId;
      this.$refs.obs.validate()
        .then((valid) => {
          if (valid) {
            this.isDisabled = true;
            this.$store.dispatch('posts/addComment')
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
