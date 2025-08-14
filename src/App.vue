<template>
  <header>
    <HeaderSite />
  </header>

  <!-- Slides left or right depending on where we're coming from -->
  <router-view v-slot="{ Component, route }">
    <transition mode="out-in" :name="route.meta.transition as string">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderSite from './components/header/HeaderSite.vue'
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 3rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* Transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.25s linear;
}

.slide-left-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(10rem);
}

.slide-left-leave-to,
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-10rem);
}

@media (min-width: 1024px) {
  header {
    /* display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
