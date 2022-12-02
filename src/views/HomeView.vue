<script lang="js">
import AllWrong from '../components/AllWrong.vue';
import HeroSection from '../components/HeroSection.vue';
import StorySection from '../components/StorySection.vue';
export default {
  name: "HomeView",
components: {
    HeroSection,
    StorySection,
    AllWrong
},
  mounted() {
    luge.lifecycle.refresh();
  },
};
// import HeroSection from "@/components/HeroSection.vue";
</script>

<template>
  <main>
    <HeroSection />
    <StorySection />
    <AllWrong />
  </main>
</template>
