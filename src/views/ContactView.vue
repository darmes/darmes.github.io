<template>
  <div>
    <h1>Let's connect!</h1>
    <ButtonLinkSocial link="mailto:david.armes90@gmail.com" label="Email">
      <span class="material-symbols-outlined"> email </span>
    </ButtonLinkSocial>
    <ButtonLinkSocial link="https://www.linkedin.com/in/david-armes-sse/" label="LinkedIn">
      <img src="/in-logo/InBug-White.png" />
    </ButtonLinkSocial>
    <ButtonLinkSocial link="https://github.com/darmes" label="Github">
      <img src="/github-mark/github-mark-white.png" />
    </ButtonLinkSocial>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'
import ButtonLinkSocial from '../components/socials/ButtonLinkSocial.vue'

export default defineComponent({
  name: 'HeaderSite',
  components: {
    ButtonLinkSocial,
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

<style>
img {
  width: 2rem;
}
</style>
