<template>
    <span class="hint">
        <slot></slot>
    </span>
</template>

<script>
export default {
  name: 'VHint',
};
</script>

<style lang="scss" scoped>
.title {
    display: block;
    color: $light_grey;
    font-weight: $light;
    font-size: $font_s;
}
</style>
