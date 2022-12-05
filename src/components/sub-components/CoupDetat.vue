<template>
  <div class="w-screen min-h-screen bg-[#35ef24]">
    <div
      class="date text-black text-[10vw] font-black uppercase text-center leading-[12rem] font-display"
    >
      <div>15 January,</div>
      <div>1966</div>

      <div class="text-black font-sans text-base py-4">
        The in
        <a
          href="https://en.wikipedia.org/wiki/1966_Nigerian_coup_d%27%C3%A9tat"
          target="_blank"
          class="underline"
          >first coup d'état</a
        >
        Nigerian history
      </div>

      <div class="flex w-screen justify-center items-center">
        <div class="w-[80%]">
          <img
            src="/img/coup-1.webp"
            alt="boko-haram"
            class="w-full grayscale coup-image z-10"
            data-lg-scroll
            data-lg-scroll-animate="{'scale': ['1', '1.3'], 'opacity': ['1', '0.3']}"
          />
          <div
            class="stats z-20 bg-transparent text-lg font-sans py-8 text-left"
          >
            <p>
              On 15 January 1966, a group of young, idealistic, UK-trained army
              majors overthrew Nigeria's democratic government in a violent
              military coup. The coup leaders described it as a brief and
              temporary revolution to end corruption and ethnic rivalry.
              Instead, it made them worse. The coup exposed the vulnerability of
              the Nigerian state, and how simple it was to use soldiers to
              attack the government, rather than protect it. A succession of
              increasingly repressive military governments ruled Nigeria for 29
              of the next 33 years, until the restoration of democracy in 1999.
              Here are four ways in which Nigeria - Africa's most populous state
              and leading oil producer - is still affected by the events of
              1966:
            </p>
            <a
              href="https://en.wikipedia.org/wiki/1966_Nigerian_coup_d%27%C3%A9tat"
              >BBC</a
            >

            <div
              class="stat-numbers w-full grid grid-cols-2 gap-3 py-8 leading-normal text-center"
            >
              <div>
                <div class="main-number font-display text-[3.3rem]">
                  <div>22</div>
                  <div>Deaths</div>
                </div>
                <div class="sub font-sans">Including major officials</div>
              </div>
              <div>
                <div class="main-number font-display text-[3.3rem]">
                  <div>Military</div>
                  <div>Regime</div>
                </div>
                <div class="sub font-sans">Takes control</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CoupDragger />
  </div>
</template>
<script>
import "sticksy";
import luge from "@waaark/luge";
import CoupDragger from "../sub-components/CoupDragger.vue";
export default {
  name: "BokoHaram",
  components: {
    CoupDragger,
  },
  mounted() {
    luge.lifecycle.refresh();
  },
};
</script>
