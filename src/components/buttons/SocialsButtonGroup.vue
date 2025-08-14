<template>
  <div class="Connect">
    <ButtonLinkSocial link="mailto:david.armes90@gmail.com" label="Email">
      <span class="material-symbols-outlined"> email </span>
    </ButtonLinkSocial>
    <ButtonLinkSocial link="https://www.linkedin.com/in/david-armes-sse/" label="LinkedIn">
      <img :src="linkedInLogo" />
    </ButtonLinkSocial>
    <ButtonLinkSocial link="https://github.com/darmes" label="Github">
      <img :src="githubLogo" />
    </ButtonLinkSocial>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDark } from '@vueuse/core'
import ButtonLinkSocial from './ButtonLink.vue'

export default defineComponent({
  name: 'AllLinkSocial',
  components: {
    ButtonLinkSocial,
  },
  setup() {
    return {
      isDark: useDark(),
    }
  },
  computed: {
    githubLogo() {
      if (this.isDark) {
        return '/github-mark/github-mark-white.png'
      } else {
        return '/github-mark/github-mark.png'
      }
    },
    linkedInLogo() {
      if (this.isDark) {
        return '/in-logo/InBug-White.png'
      } else {
        return '/in-logo/InBug-Black.png'
      }
    },
  },
})
</script>

<style scoped>
.Connect {
  display: flex;
  gap: 1rem;
}
img {
  width: 2.4rem;
}
</style>
