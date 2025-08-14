<template>
  <div class="HomeView">
    <div class="Left">
      <pvImage src="/family.webp" alt="Image" width="500" />
    </div>
    <div class="Right">
      <div class="Intro">
        <p>Hi! I'm David and I'm a software engineer, a leader, a gamer, and a girl dad.</p>
        <p>
          I've been writing code for over 10 years. I have a wide breadth of technical knowledge,
          including artificial intelligence, frontend frameworks, backend web services,
          microservices, relational, and non-relational databases.
        </p>
        <p>
          I'm a veteran with combat tested leadership skills. I'm trained to educate, mentor, and
          build up both individuals and teams. I'm a strong communicator with proficiency explaining
          technical topics.
        </p>
        <p>
          Some of my favorite games are Shadow of the Colossus, Mass Effect, and Civ 5 - just to
          name a few. I'm an avid gamer and enjoy nearly every genre: FPS, Action, Platformer,
          Strategy, RPG, Roguelike, Sci-Fi, and Simulation. I enjoy making games as much as I enjoy
          playing them, and hope to craft memorable experiences.
        </p>
        <p>
          I have four wonderful daughters who bring joy and laughter to my life. They constantly
          amaze me with their intelligence, kindness, passion, and humor. I love them with all my
          heart!
        </p>
        <p>
          If you'd like to connect with me, use one the methods below. I look forward to hearing
          from you!
        </p>
      </div>
      <div class="Connect">
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'
import pvImage from 'primevue/image'
import ButtonLinkSocial from '../components/socials/ButtonLinkSocial.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    ButtonLinkSocial,
    pvImage,
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
.HomeView {
  display: flex;
  justify-content: space-between;
  margin: 0 4rem;
  gap: 2rem;
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
.Connect {
  /* width: 2rem; */
}
a img {
  width: 2.4rem;
}
</style>
