<template>
  <div class="HomeView">
    <div class="Left gradient-border">
      <pvImage src="/family.webp" alt="Image" width="100%" />
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
      <SocialsButtonGroup />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useMobile from '@/utilities/useMobile'
import pvImage from 'primevue/image'
import SocialsButtonGroup from '@/components/buttons/SocialsButtonGroup.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    SocialsButtonGroup,
    pvImage,
  },
  setup() {
    return {
      isMobile: useMobile().isMobile,
    }
  },
  computed: {
    flexDirection() {
      if (this.isMobile) {
        return 'column'
      } else {
        return 'row'
      }
    },
    leftRightMargin() {
      if (this.isMobile) {
        return '0'
      } else {
        return '4rem'
      }
    },
    leftRightWidth() {
      if (this.isMobile) {
        return '100%'
      } else {
        return '50%'
      }
    },
  },
})
</script>

<style scoped>
.HomeView {
  display: flex;
  justify-content: space-between;
  margin-left: v-bind(leftRightMargin);
  margin-right: v-bind(leftRightMargin);
  gap: 2rem;
  flex-direction: v-bind(flexDirection);
}
.Left {
  padding-top: 1rem;
  width: v-bind(leftRightWidth);
  max-width: 50rem;
  margin: 0 auto;
}
.Right {
  width: v-bind(leftRightWidth);
  justify-items: center;
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
</style>
