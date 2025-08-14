<template>
  <DetailRoot
    title="Experience"
    subtitle="A high level overview of my work experience in reverse chronological order"
  >
    <DetailCard title="Aledade, Inc" subtitle="Senior Software Engineer">
      Designed and built solutions comprising of multiple tasks that deliver desired business
      objectives. Instrumented metric capture in support of user feedback and performance
      requirements. Provided mentoring and feedback to junior developers to enhance the overall
      team.
    </DetailCard>
    <DetailCard title="Tempus Technologies, Inc" subtitle="Software Engineering Manager">
      Managed multiple teams of software developers across disciplines to design and implement new
      features. Supported developer growth by providing training, feedback, and resources. Tracked
      key productivity metrics to support business needs and ensure timely output.
    </DetailCard>
    <DetailCard title="Epic" subtitle="Software Engineer">
      Primary software developer of new features, responsibilities included estimation, design, core
      development, issue tracking, and release strategy. Also supported product adoption and launch
      by customers.
    </DetailCard>
    <DetailCard title="United States Air Force" subtitle="Flight Commander">
      Small team (4-8) leader responsible for planning, executing, and debriefing dynamic,
      fast-paced flight operations around the world. Also acted as instructor to train others to
      perform similar role.
    </DetailCard>
  </DetailRoot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'
import DetailCard from '@/components/detail/DetailCard.vue'
import DetailRoot from '@/components/detail/DetailRoot.vue'

export default defineComponent({
  name: 'ExperienceView',
  components: {
    DetailCard,
    DetailRoot,
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
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
