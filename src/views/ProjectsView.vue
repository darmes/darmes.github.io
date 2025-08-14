<template>
  <DetailRoot title="Projects" subtitle="A selection of personal and professional projects">
    <!-- Care Programs Worklist -->
    <DetailCard title="Care Programs Worklist" subtitle="Typescript, Python">
      <div class="Text">
        Produced a unified view of Aledade's complementary care programs that help private medical
        practices enhance their patients' outcomes and reduce healthcare costs by identifying
        patients who could most benefit from specialized support services.
      </div>
      <div>
        <ButtonLink label="Learn More" link="https://aledade.com/what-we-offer/" />
      </div>
      <template #side-content>
        <pvImage src="/projects/care-programs-worklist.webp" alt="Image" height="200" preview />
      </template>
    </DetailCard>
    <!-- Quest Journal -->
    <DetailCard title="Quest Journal" subtitle="Ruby, VB.net">
      <div class="Text">
        Authored the #2 most popular add-on for RPG Maker XP. Created custom quest/mission display
        system and a supporting pipeline tool for development of quests. Integrated add-on into
        existing RMXP debugging tools.
      </div>
      <div>
        <ButtonLink
          label="Learn More"
          link="https://forums.rpgmakerweb.com/index.php?threads/mobiuss-quest-journal.19144/"
        />
      </div>
      <template #side-content>
        <pvImage src="/projects/quest-journal.webp" alt="Image" height="200" preview />
      </template>
    </DetailCard>
    <!-- Disaster on Aero VI -->
    <DetailCard title="Disaster on Aero VI" subtitle="Ruby, RPG Maker">
      <div class="Text">
        Originated a 2D puzzle adventure game built with RPG Maker XP. Created the game’s map,
        designed all the puzzles, and created various interfaces supporting player
        interaction/puzzle solving. Garnered postivie critical acclaim and over four thousands
        players.
      </div>
      <div>
        <ButtonLink
          label="Learn More"
          link="https://forums.rpgmakerweb.com/index.php?threads/disaster-on-aero-vi.29132/"
        />
      </div>
      <template #side-content>
        <pvImage src="/projects/bridge-aero-vi.webp" alt="Image" height="200" preview />
      </template>
    </DetailCard>
    <!-- Artificial Intelligence -->
    <DetailCard title="AI for solving visual brain teasers" subtitle="Python">
      <div class="Text">
        Architected and trained custom artificial intelligence to solve human intelligence tests -
        Raven's Progressive Matrices - using efficient image recognition methods. Acheived realtime
        levels of performance while maintaining sufficient accuracy to meet or exceed adult scoring
        averages.
      </div>
      <div>
        <ButtonLink label="Learn More" link="./projects/RPM-AI-Paper.pdf" />
      </div>
      <template #side-content>
        <pvImage src="/projects/raven-ai.webp" alt="Image" height="200" preview />
      </template>
    </DetailCard>
  </DetailRoot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DetailCard from '@/components/detail/DetailCard.vue'
import DetailRoot from '@/components/detail/DetailRoot.vue'
import pvImage from 'primevue/image'
import ButtonLink from '@/components/buttons/ButtonLink.vue'

export default defineComponent({
  name: 'ProjectsView',
  components: {
    ButtonLink,
    DetailCard,
    DetailRoot,
    pvImage,
  },
})
</script>

<style scoped>
.Text {
  margin-bottom: 2rem;
}
</style>
