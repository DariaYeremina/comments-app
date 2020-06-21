<template>
    <p class="paragraph">
        <slot></slot>
    </p>
</template>

<script>
export default {
  name: 'VParagraph',
};
</script>

<style lang="scss" scoped>
.paragraph {
    color: $grey;
    font-size: $font_m;
}
</style>
