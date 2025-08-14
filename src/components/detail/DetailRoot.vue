<template>
  <div class="DetailRoot">
    <div class="Title">{{ title }}</div>
    <div class="Subtitle">{{ subtitle }}</div>
    <div class="Content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useMobile from '@/utilities/useMobile'

export default defineComponent({
  name: 'DetailRoot',
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup() {
    return {
      isMobile: useMobile().isMobile,
    }
  },
  computed: {
    leftRightMargin() {
      if (this.isMobile) {
        return '0'
      } else {
        return '4rem'
      }
    },
  },
})
</script>

<style scoped>
.DetailRoot {
  margin-left: v-bind(leftRightMargin);
  margin-right: v-bind(leftRightMargin);
}
.Title {
  display: block;
  font-size: xx-large;
  font-weight: bold;
}
.Subtitle {
  display: block;
  margin-bottom: 2rem;
}
.Content {
  /* max-width: 60rem; */
  line-height: 1.5;
}
</style>
