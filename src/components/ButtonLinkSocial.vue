<template>
  <a class="HeaderRoot gradient-border" :href="link" target="_blank">
    <slot> No Image </slot>
    <div class="text">
      {{ label }}
    </div>
  </a>
</template>

<script>
export default {
  name: 'ButtonLinkSocial',
  props: {
    label: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.HeaderRoot {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
