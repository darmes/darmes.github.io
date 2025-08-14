<template>
  <div class="DetailRoot">
    <div class="Title">{{ title }}</div>
    <div class="Subtitle">{{ subtitle }}</div>
    <div class="Content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'

export default defineComponent({
  name: 'DetailRoot',
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
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
.DetailRoot {
  margin: 0 4rem;
}
.Title {
  display: block;
  font-size: xx-large;
  font-weight: bold;
}
.Subtitle {
  display: block;
  margin-bottom: 2rem;
}
.Content {
  /* max-width: 60rem; */
  line-height: 1.5;
}
</style>
