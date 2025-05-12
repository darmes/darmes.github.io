<template>
  <a class="ButtonRoot gradient-border" :href="link" target="_blank">
    <slot> No Image </slot>
    <div v-if="!isMobile">
      {{ label }}
    </div>
  </a>
</template>

<script lang="ts">
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
  data() {
    return { windowWidth: window.innerWidth }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
      console.log(this.isMobile)
    })
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768
    },
  },
}
</script>

<style scoped>
.ButtonRoot {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 3.4rem;
  min-width: 4.4rem;
}
</style>
