<template>
  <div class="HeaderRoot gradient-border">
    <span v-if="isMobile" class="material-symbols-outlined" :onClick="toggleDrawer"> menu </span>
    <h1>David Armes</h1>
    <SocialsButtonGroup v-if="!isMobile" />
    <Drawer v-model:visible="menuOpen" header="Navigation">
      <nav>
        <RouterLink :onClick="toggleDrawer" to="/">Home</RouterLink>
        <RouterLink :onClick="toggleDrawer" to="/skills">Skills</RouterLink>
        <RouterLink :onClick="toggleDrawer" to="/experience">Experience</RouterLink>
        <RouterLink :onClick="toggleDrawer" to="/projects">Projects</RouterLink>
        <RouterLink :onClick="toggleDrawer" to="/about">About</RouterLink>
      </nav>
    </Drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'
import Drawer from 'primevue/drawer'
import SocialsButtonGroup from '../buttons/SocialsButtonGroup.vue'

export default defineComponent({
  name: 'HeaderSite',
  components: {
    Drawer,
    SocialsButtonGroup,
  },
  data() {
    return {
      menuOpen: false,
    }
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
  methods: {
    toggleDrawer() {
      this.menuOpen = !this.menuOpen
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

nav,
span {
  z-index: 100;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  font-size: large;
  font-weight: bold;
}
</style>
