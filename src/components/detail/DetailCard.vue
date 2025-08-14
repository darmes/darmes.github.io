<template>
  <div class="DetailCard">
    <div class="MainContent">
      <div class="Title">{{ title }}</div>
      <div class="Subtitle">{{ subtitle }}</div>
      <div class="Content">
        <slot></slot>
      </div>
    </div>
    <div class="SideContent">
      <slot name="side-content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'

export default defineComponent({
  name: 'DetailCard',
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
.DetailCard {
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.Title {
  display: block;
  font-size: large;
  font-weight: bold;
}
.Subtitle {
  font-style: italic;
  margin-bottom: 0.4rem;
}
.MainContent {
  max-width: 70rem;
  line-height: 1.5;
  flex-grow: 1;
}
</style>
