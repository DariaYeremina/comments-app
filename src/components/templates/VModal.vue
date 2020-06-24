<template>
    <div class="modal__wrapper">
        <div class="modal">
            <div class="modal__header">
                <slot name="title"></slot>
                <img :src="close"
                        alt="close"
                        class="modal__close"
                        @click="closeEmitter">
            </div>
            <div class="modal__content">
                <slot name="content"></slot>
            </div>
            <div class="modal__actions">
                <slot name="actions"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import close from '@/assets/icons/close.svg';

export default {
  name: 'VModal',
  data: () => ({
    close,
  }),
  methods: {
    closeEmitter() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
    .modal {
        max-height: 80vh;
        height: auto;
        width: 40vw;
        background-color: #fff;
        overflow-y: auto;
        padding: 0 15px;
        border-radius: 4px;
        &__wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background-color: $grey_transparent;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid $light_grey;
        }
        &__close {
            width: 2rem;
            height: auto;
            cursor: pointer;
        }
        &__content {
            padding: 15px 0;
        }
        &__actions {
            border-top: 1px solid $light_grey;
            padding: 20px 0;
            display: flex;
            justify-content: center;
        }
    }
</style>
