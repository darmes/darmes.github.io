<template>
  <div class="HomeView">
    <div class="AvatarContainer">
      <Avatar image="/profile.webp" shape="circle" class="Avatar" alt="Profile Photo" />
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
      <HeaderNavBar mini />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Avatar from 'primevue/avatar'
import HeaderNavBar from '@/components/header/HeaderNavBar.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Avatar,
    HeaderNavBar,
  },
})
</script>

<style scoped>
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
