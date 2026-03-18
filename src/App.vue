<template>
  <div class="wrapper">
    <header>
      <HeaderSite />
    </header>

    <!-- Slides left or right depending on where we're coming from -->
    <router-view v-slot="{ Component, route }">
      <transition mode="out-in" :name="route.meta.transition as string">
        <component :is="Component" />
      </transition>
    </router-view>

    <footer>
      <div id="footer">
        <p>© {{ currentYear }} David Armes. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderSite from './components/header/HeaderSite.vue'
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.wrapper {
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Minimum height equal to the viewport height */
  margin: 0 auto;
  padding: 2rem;
  padding-bottom: 1rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 3rem;
}

footer {
  margin-top: auto; /* Pushes the footer to the bottom */
  justify-items: end;
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
