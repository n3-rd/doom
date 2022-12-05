<template>
  <div class="w-screen min-h-screen bg-[#000000]">
    <div
      class="date text-red-600 text-[10vw] font-black uppercase text-center leading-[12rem] font-display"
    >
      <div>30 May,</div>
      <div>1967</div>

      <div class="text-[#d13333] font-sans text-base py-4">
        The
        <a
          href="https://en.wikipedia.org/wiki/Nigerian_Civil_War"
          target="_blank"
          class="underline"
          >Nigerian Civil War</a
        >
        starts
      </div>

      <div class="flex w-screen justify-center items-center">
        <div class="w-[80%]">
          <img
            src="/img/civilwar-1.jpg"
            alt="boko-haram"
            class="w-full grayscale civilwar-image z-10"
            data-lg-scroll
            data-lg-scroll-animate="{'scale': ['1', '1.3'], 'opacity': ['1', '0.3']}"
          />
          <div
            class="stats z-20 bg-transparent text-lg font-sans py-8 text-left"
          >
            <p>
              The Nigerian Civil War (6 July 1967 – 15 January 1970) was fought
              between Nigeria and the Republic of Biafra, a secessionist state
              which had declared its independence from Nigeria in 1967. Within a
              year, the Federal Government troops surrounded Biafra, captured
              coastal oil facilities and the city of Port Harcourt. A blockade
              was imposed as a deliberate policy during the ensuing stalemate
              which led to mass starvation.[18] During the two and half years of
              the war, there were about 100,000 overall military casualties,
              while between 500,000 and 2 million Biafran civilians died of
              starvation. In mid-1968, images of malnourished and starving
              Biafran children saturated the mass media of Western countries.
              The plight of the starving Biafrans became a cause célèbre in
              foreign countries, enabling a significant rise in the funding and
              prominence of international non-governmental organizations (NGOs).
            </p>

            <div
              class="stat-numbers w-full grid grid-cols-2 gap-3 py-8 leading-normal text-center"
            >
              <div>
                <div class="main-number font-display text-[3.3rem]">
                  <div>2</div>
                  <div>Million</div>
                </div>
                <div class="sub font-sans">Civilian Deaths</div>
              </div>
              <div>
                <div class="main-number font-display text-[3.3rem]">
                  <div>100</div>
                  <div>Thousand</div>
                </div>
                <div class="sub font-sans">Military Deaths</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CivilWarDragger />
  </div>
</template>
<script>
import "sticksy";
import luge from "@waaark/luge";
import CivilWarDragger from "../sub-components/CivilWarDragger.vue";
export default {
  name: "BokoHaram",
  components: {
    CivilWarDragger,
  },
  mounted() {
    luge.lifecycle.refresh();
    const insurgencyImage = document.querySelector(".insurgency-image");
    // luge.scrollobserver.add(insurgencyImage);
    // insurgencyImage.addEventListener("scrollprogress", (e) => {
    //   // invert image on scroll
    //   insurgencyImage.style.filter(invert(0 + e.target.scrollProgress));
    // });
  },
};
</script>
