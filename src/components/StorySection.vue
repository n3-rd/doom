<template>
  <div
    class="h-screen my-48 font-black text-[19vw] text-black uppercase leading-[19rem] flex flex-col justify-center items-center"
  >
    <div class="z-10 absolute">
      there was a <span class="text-green-600">country</span>
    </div>
    <div class="z-30 absolute outline-text">there was a country</div>
    <!-- absolute placed image -->
    <div
      class="rellax z-20 absolute w-[40vw] h-[44vh] bg-cover bg-center bg-[url(/img/pexels-emmanuel-ikwuegbu-8445454.jpg)]"
      data-rellax-speed="-3"
      data-rellax-percentage="0.5"
    ></div>
  </div>
  <div class="word-grouping">
    <div
      class="h-[14rem] font-black text-[19vw] text-black uppercase leading-[19rem] flex flex-col justify-center items-center"
    >
      <div class="z-10 absolute">MILK</div>
    </div>

    <div
      class="h-[14rem] font-black text-[19vw] text-black uppercase leading-[19rem] flex flex-col justify-center items-center"
    >
      <div class="z-10 absolute">HONEY</div>
    </div>

    <div
      class="h-[14rem] font-black text-[19vw] text-black uppercase leading-[19rem] flex flex-col justify-center items-center"
    >
      <div class="z-10 absolute love" data-lg-scroll>LOVE</div>
    </div>
  </div>
  <!-- absolute placed image -->
  <!-- <div
    class="rellax z-20 absolute w-[40vw] h-[44vh] bg-cover bg-center bg-[url(/img/pexels-tope-a-asokere-5789323.jpg)]"
    data-rellax-speed="-5"
    data-rellax-percentage="0.5"
  ></div> -->
</template>
<script lang="js">
import Rellax from "rellax";
import luge from "@waaark/luge";
export default {
  name: "StorySection",
  methods: {
    // add a method to handle the scroll progress
  },
  mounted() {
    console.log("story section mounted");
    var rellax = new Rellax(".rellax");
    console.log(rellax);
    luge.lifecycle.refresh();
    const love = document.querySelector(".love");
    luge.scrollobserver.add(love);
    love.addEventListener("scrollprogress", (e) => {
      // change the color of the text from black to red based on the scroll progress
        love.style.color = `rgb(${0 + e.target.scrollProgress * 255}, ${0}, ${0})`;
    });

  },
};
</script>
<style lang="scss">
.outline-text {
  color: transparent;
  -webkit-text-stroke: 2px #fff;
}
</style>
