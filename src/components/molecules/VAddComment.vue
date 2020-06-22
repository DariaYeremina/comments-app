<template>
<ValidationObserver ref="obs">
    <VModal @close="close">
        <template slot="title">
            <VSubheading>{{ $t('addComment.title') }}</VSubheading>
        </template>
        <template slot="content">
                <form>
                    <VInput :placeholder="$t('placeholders.name')"
                            :label="$t('labels.name')"
                            v-model="name"
                            name="nameField"
                            :rules="{required: true, name: true}"></VInput>
                    <VInput :placeholder="$t('placeholders.email')"
                            :label="$t('labels.email')"
                            v-model="email"
                            name="emailField"
                            type="email"
                            rules="required|email"></VInput>
                    <VInput :placeholder="$t('placeholders.comment')"
                            :label="$t('labels.comment')"
                            tag="textarea"
                            v-model="body"
                            name="commentField"
                            rules="required|regularField"></VInput>
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
import { mapFields } from 'vuex-map-fields';
import { ValidationObserver } from 'vee-validate';

export default {
  name: 'VAddComment',
  components: {
    VModal, VSubheading, VInput, VButton, ValidationObserver,
  },
  data: () => ({
    isDisabled: false,
  }),
  computed: {
    ...mapFields('posts', [
      'comment.name',
      'comment.email',
      'comment.body',
    ]),
  },
  methods: {
    close() {
      this.$emit('close');
    },
    addComment() {
      console.log(this.$refs.obs);
      this.$refs.obs.validate()
        .then((valid) => {
          console.log(valid);
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
