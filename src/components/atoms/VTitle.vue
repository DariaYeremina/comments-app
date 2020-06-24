<template>
    <h5 class="title">
        <slot></slot>
    </h5>
</template>

<script>
export default {
  name: 'VTitle',
};
</script>

<style lang="scss" scoped>
.title {
    color: $grey;
    font-weight: $normal;
    font-size: $font_m;
    text-align: center;
    margin: 0;
}
</style>
