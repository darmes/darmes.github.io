<template>
  <a class="ButtonRoot gradient-border" :href="link" target="_blank">
    <div class="ImgLabel">
      <slot> No Image </slot>
      <div v-if="!isMobile">
        {{ label }}
      </div>
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
  display: block;
  align-items: center;
  min-height: 3.4rem;
  width: fit-content;
}
.ImgLabel {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
</style>
