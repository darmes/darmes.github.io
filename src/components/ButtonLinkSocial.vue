<template>
  <a class="ButtonRoot gradient-border" :href="link" target="_blank">
    <slot> No Image </slot>
    <div v-if="!isMobile">
      {{ label }}
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'

export default defineComponent({
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
  setup() {
    return {
      windowSize: useWindowSize(),
    }
  },
  computed: {
    isMobile() {
      return this.windowSize.width.value <= 768
    },
  },
})
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
