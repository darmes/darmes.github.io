<template>
  <DetailRoot
    title="Skills"
    subtitle="A comprehensive overview of my technical and soft skills, catergorized for clarity"
  >
    <DetailCard title="Programming Languages">
      <DetailChipList
        :chips="['Python', 'Typescript', 'Javascript', 'Ruby', 'C#', 'Delphi', 'Scheme', 'M']"
      />
    </DetailCard>
    <DetailCard title="Frameworks">
      <DetailChipList
        :chips="['Vue.js', 'Node.js', 'jQuery', 'ASP.NET', 'Flask', 'Unity', 'Godot', 'RPG Maker']"
      />
    </DetailCard>
    <DetailCard title="Databases">
      <DetailChipList :chips="['PostgreSQL', 'Microsoft SQL Server', 'Caché']" />
    </DetailCard>
    <DetailCard title="Technologies">
      <DetailChipList
        :chips="[
          'AWS',
          'Git',
          'Github',
          'SVN',
          'Docker',
          'Airflow',
          'Snowflake',
          'DBT',
          'Datadog',
          'PagerDuty',
          'Sentry',
          'Pendo',
          'Jellyfish',
          'Jira',
          'Confluence',
          'Microsoft Office',
        ]"
      />
    </DetailCard>
    <DetailCard title="Leadership">
      <DetailChipList
        :chips="[
          'Team Management',
          'Mentoring',
          'Project Leadership',
          'Code Review',
          'Interviewing',
          'Hiring',
          'Direct Feedback',
          'Coaching',
          'Dynamic Planning',
        ]"
      />
    </DetailCard>
    <DetailCard title="Communication">
      <DetailChipList
        :chips="[
          'Technical Documentation',
          'Presentations',
          'Cross-functional Collaboration',
          'Requirement Writing',
          'User Feedback',
        ]"
      />
    </DetailCard>
  </DetailRoot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'
import DetailCard from '@/components/detail/DetailCard.vue'
import DetailChipList from '@/components/detail/DetailChipList.vue'
import DetailRoot from '@/components/detail/DetailRoot.vue'

export default defineComponent({
  name: 'SkillsView',
  components: {
    DetailCard,
    DetailChipList,
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
