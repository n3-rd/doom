<script lang="js">
// import { RouterView } from "vue-router";
// import { onMounted } from "vue";
import luge from "@waaark/luge";
import NoiseComponent from "../src/components/sub-components/NoiseComponent.vue";
import Lenis from '@studio-freight/lenis'
const smoothScroll = ()=>{
  const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
}
export default {
    name: "App",
    mounted() {
        luge.lifecycle.refresh();
        smoothScroll()

    },
    components: { NoiseComponent }
};
</script>

<template>
  <NoiseComponent />
  <RouterView />
</template>
