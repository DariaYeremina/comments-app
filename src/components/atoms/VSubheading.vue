<template>
    <h3 class="subheading">
        <slot></slot>
    </h3>
</template>

<script>
export default {
  name: 'VSubheading',
};
</script>

<style lang="scss" scoped>
.subheading {
    color: $grey;
    font-weight: $normal;
    font-size: $font_l;
    text-align: center;
}
</style>
