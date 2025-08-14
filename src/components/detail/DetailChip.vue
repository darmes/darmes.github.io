<template>
  <div class="DetailChip">
    {{ label }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DetailChip',
  props: {
    label: {
      type: String,
      required: true,
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
