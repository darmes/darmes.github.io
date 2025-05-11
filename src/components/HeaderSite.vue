<template>
  <div class="HeaderRoot gradient-border">
    <h1>David Armes</h1>
    <ButtonLinkSocial link="tel:18123200302" label="Call">
      <span class="material-symbols-outlined"> call </span>
    </ButtonLinkSocial>
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
</template>

<script>
import ButtonLinkSocial from './ButtonLinkSocial.vue'

export default {
  components: {
    ButtonLinkSocial,
  },
}
</script>

<style scoped>
.HeaderRoot {
  display: flex;
  align-items: center;
  gap: 1rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -0.2rem;
  flex-grow: 1;
}

img {
  width: 2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
