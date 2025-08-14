<template>
  <div class="NavBar gradient-border">
    <nav>
      <RouterLink to="/" v-if="!mini">Home</RouterLink>
      <RouterLink to="/skills">Skills</RouterLink>
      <RouterLink to="/experience">Experience</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/about" v-if="!mini">About</RouterLink>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderNavBar',
  components: {},
  props: {
    mini: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>

<style scoped>
.NavBar {
  width: fit-content;
  margin: 1rem;
  margin-left: 3rem;
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
