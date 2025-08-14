<template>
  <a class="ButtonRoot gradient-border" :href="link" target="_blank">
    <div class="ImgLabel">
      <slot></slot>
      <div v-if="!$slots.default || !isMobile">
        {{ label }}
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useMobile from '@/utilities/useMobile'

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
      isMobile: useMobile().isMobile,
    }
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
