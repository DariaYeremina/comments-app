<template>
    <h1 class="heading">
        <slot></slot>
    </h1>
</template>

<script>
export default {
  name: 'VHeading',
};
</script>

<style lang="scss" scoped>
.heading {
    color: $grey;
    font-weight: $bold;
    font-size: $font_xxl;
    text-align: center;
}
</style>
