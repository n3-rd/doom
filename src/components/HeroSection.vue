<template>
  <div class="hero h-[300vh] w-screen bg-black text-white">
    <div
      class="hero-text font-display font-black text-[18vw] fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center"
      data-lg-scroll
    >
      <!-- put DOOM in different <span> tags</span> -->
      <div>DOOM</div>
      <div
        class="absolute bottom-2 right-4 text-white text-lg"
        data-lg-scroll
        data-lg-scroll-animate="{'opacity': ['1', '0']}"
      >
        SCROLL
      </div>
    </div>
  </div>
</template>

<script lang="js">
// import { onMounted } from "vue";
import luge from "@waaark/luge";
import 'sticksy'

export default {
  name: "HeroSection",
  mounted() {
    luge.lifecycle.refresh();
    const heroText = document.querySelector(".hero-text",{
      listen: true,
    });
    luge.scrollobserver.add(heroText)
    heroText.addEventListener("scrollprogress", (e) => {
      // change the color of the text from white to red based on the scroll progress
      heroText.style.color = `rgb(${255}, ${
        255 - e.target.scrollProgress * 255
      }, ${255 - e.target.scrollProgress * 255 })`;
    });
    var heroTextSticky = new Sticksy('.hero-text');
// you can handle state changing
heroTextSticky.onStateChanged = function (state) {
    if(state === 'fixed') {
        heroTextSticky.nodeRef.classList.add('widget--sticky')
    } else {
        heroTextSticky.nodeRef.classList.remove('widget--sticky')
    }
}
  },
};
</script>

<style>
.hero-text {
  /* animate to red with luge progress */
  background-color: --progress;
}
</style>
