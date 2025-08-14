<template>
  <div class="MobileNavRoot">
    <div class="BackContainer">
      <div v-if="!isHome" class="NavBar gradient-border">
        <span class="material-symbols-outlined"> arrow_back </span>
        <RouterLink to="/" />
      </div>
    </div>
    <SocialsButtonGroup />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useMobile from '@/utilities/useMobile'
import { useRoute } from 'vue-router'
import SocialsButtonGroup from '../buttons/SocialsButtonGroup.vue'

export default defineComponent({
  name: 'HeaderMobileNavBar',
  components: {
    SocialsButtonGroup,
  },
  props: {
    mini: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    return {
      isMobile: useMobile().isMobile,
      route: useRoute(),
    }
  },
  computed: {
    isHome() {
      return this.route.name == 'home'
    },
  },
})
</script>

<style scoped>
.MobileNavRoot {
  display: flex;
  margin-top: 1rem;
  justify-content: flex-end;
  align-items: center;
}
.BackContainer {
  flex-grow: 1;
}
.NavBar {
  width: fit-content;
  align-items: center;
  display: flex;
}

a {
  width: 100%;
  position: relative;
  z-index: 100;
}
</style>
