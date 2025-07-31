<template>
  <div class="HomeView">
    <div class="AvatarContainer">
      <Avatar image="/profile.webp" shape="circle" class="Avatar" />
    </div>
    <div class="Name">David Armes</div>
    <div class="Title">Senior Software Engineer</div>
    <div class="Intro">
      <p>My name's David and I'm a senior software engineer, a proven leader, and a gamer.</p>
      <p>
        I've been writing code for over 10 years. I have a wide breadth of technical knowledge,
        including artificial intelligence, frontend frameworks, backend web services, microservices,
        relational, and non-relational databases.
      </p>
      <p>
        I'm a veteran with combat tested leadership skills. I'm trained to educate, mentor, and
        build up both individuals and teams. I'm a strong communicator with proficiency explaining
        technical topics.
      </p>
      <p>
        Some of my favorite games are Shadow of the Colossus, Mass Effect, and Civ 5 - just to name
        a few. I'm an avid gamer and enjoy nearly every genre: FPS, Action, Platformer, Strategy,
        RPG, Roguelike, Sci-Fi, and Simulation. I enjoy making games as much as I enjoy playing
        them, and hope to craft memorable experiences.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'
import Avatar from 'primevue/avatar'

export default defineComponent({
  name: 'HomeView',
  components: {
    Avatar,
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
div .Avatar {
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  display: block;
}
</style>
