<template>
  <div class="HeaderRoot gradient-border">
    <span v-if="isMobile" class="material-symbols-outlined"> menu </span>
    <h1>David Armes</h1>
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
  <div class="NavBar gradient-border">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/">Skills</RouterLink>
      <RouterLink to="/">Experience</RouterLink>
      <RouterLink to="/">Projects</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/">Contact</RouterLink>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'
import ButtonLinkSocial from './ButtonLinkSocial.vue'

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

<style scoped>
.HeaderRoot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.NavBar {
  width: fit-content;
  margin: 1rem;
  margin-left: 3rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -0.2rem;
  flex-grow: 1;
}

img {
  width: 2rem;
}

nav {
  width: 100%;
  position: relative;
  z-index: 100;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
