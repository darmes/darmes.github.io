<template>
  <HeaderName />
  <HeaderMobileNavBar v-if="isMobile" />
  <HeaderNavBar v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'
import HeaderName from './HeaderName.vue'
import HeaderNavBar from './HeaderNavBar.vue'
import HeaderMobileNavBar from './HeaderMobileNavBar.vue'

export default defineComponent({
  name: 'HeaderSite',
  components: {
    HeaderName,
    HeaderNavBar,
    HeaderMobileNavBar,
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
