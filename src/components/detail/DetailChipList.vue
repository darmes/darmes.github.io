<template>
  <div class="DetailChipList">
    <chip class="Chip" v-for="(chip, idx) in chips" :label="chip" :key="idx" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Chip from './DetailChip.vue'

export default defineComponent({
  name: 'DetailChipList',
  components: {
    Chip,
  },
  props: {
    chips: {
      type: Array<string>,
      required: true,
    },
  },
})
</script>

<style scoped>
.DetailChipList {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
}
</style>
