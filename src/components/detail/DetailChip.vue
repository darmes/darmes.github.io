<template>
  <div class="DetailChip">
    {{ label }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'

export default defineComponent({
  name: 'DetailChip',
  props: {
    label: {
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
.DetailChip {
  background-color: var(--color-background-mute);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}
</style>
