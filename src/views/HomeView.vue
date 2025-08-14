<template>
  <div class="HomeView">
    <div class="AvatarContainer">
      <Avatar image="/profile.webp" shape="circle" class="Avatar" />
    </div>
    <div class="Name">David Armes</div>
    <div class="Title">Senior Software Engineer</div>
    <div class="Intro">
      <p>
        Accomplished leader with over six years’ experience building, mentoring, and training teams.
        Wide breadth of technical knowledge, including artificial intelligence, frontend frameworks,
        backend web services, microservices, relational, and non-relational databases. Strong
        communicator with proficiency explaining technical topics.
      </p>
    </div>
    <div class="Links">
      <pv-button asChild v-slot="slotProps">
        <RouterLink to="/Skills" :class="slotProps.class">Skills</RouterLink>
      </pv-button>
      <pv-button asChild v-slot="slotProps">
        <RouterLink to="/Experience" :class="slotProps.class">Experience</RouterLink>
      </pv-button>
      <pv-button asChild v-slot="slotProps">
        <RouterLink to="/projects" :class="slotProps.class">Projects</RouterLink>
      </pv-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'
import Avatar from 'primevue/avatar'
import pvButton from 'primevue/button'

export default defineComponent({
  name: 'HomeView',
  components: {
    Avatar,
    pvButton,
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
.Name {
  display: block;
  text-align: center;
  font-size: xx-large;
  font-weight: bold;
}
.Title {
  display: block;
  text-align: center;
  font-size: large;
}
.Intro {
  text-align: justify;
  margin: 1rem auto;
  max-width: 60rem;
  line-height: 1.5;
}
.Intro p {
  margin-bottom: 2rem;
}
.Links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 1rem;
  row-gap: 1rem;
}
div .Avatar {
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  display: block;
}
</style>
