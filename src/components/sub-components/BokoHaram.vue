<template>
  <div class="w-screen min-h-screen bg-[#EF5624]">
    <div
      class="date text-black text-[10vw] font-black uppercase text-center leading-[12rem] font-display"
    >
      <div>Maiduguri,</div>
      <div>2002</div>

      <div class="text-yellow-300 font-sans text-base py-4">
        Boko Haram was founded in Maiduguri by
        <a
          href="https://en.wikipedia.org/wiki/Mohammed_Yusuf_(Boko_Haram)"
          target="_blank"
          class="underline"
          >Mohammed Yusuf</a
        >
      </div>

      <div class="flex w-screen justify-center items-center">
        <div class="w-[80%]">
          <img
            src="/img/boko-haram-1.jpg"
            alt="boko-haram"
            class="w-full grayscale insurgency-image z-10"
            data-lg-scroll
            data-lg-scroll-animate="{'scale': ['1', '1.3'], 'opacity': ['1', '0']}"
          />
          <div
            class="stats z-20 bg-transparent text-lg font-sans py-8 text-left"
          >
            <p>
              Boko Haram, officially known as Jamat Ahl as-Sunnah lid-Dawah
              wal-Jihd is an Islamic terrorist organization based in
              northeastern Nigeria, which is also active in Chad, Niger, and
              northern Cameroon. Founded by Mohammed Yusuf in 2002, the group
              was led by Abubakar Shekau from 2009 until his death in 2021. In
              2016, the group split, resulting in the emergence of a hostile
              faction known as the Islamic State's West Africa Province.
            </p>

            <p>
              The group formerly aligned itself with the Islamic State of Iraq
              and the Levant and has been known for its brutality, and since the
              insurgency started in 2009, Boko Haram has killed tens of
              thousands of people, in frequent attacks against the police, armed
              forces and civilians. It has resulted in the deaths of more than
              300,000 children, displaced 2.3 million from their homes, and was
              the world's deadliest terror group during part of the mid-2010s
              according to the Global Terrorism Index. Boko Haram has
              contributed to regional food crises and famines.
            </p>

            <div
              class="stat-numbers w-full grid grid-cols-2 gap-3 py-8 leading-normal text-center"
            >
              <div>
                <div class="main-number font-display text-[3.3rem]">
                  <div>35</div>
                  <div>Thousand</div>
                </div>
                <div class="sub font-sans">Deaths from boko haram</div>
              </div>
              <div>
                <div class="main-number font-display text-[3.3rem]">
                  <div>1.8</div>
                  <div>Million</div>
                </div>
                <div class="sub font-sans">people displaced</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <InsurgencyDragger />
  </div>
</template>
<script>
import "sticksy";
import luge from "@waaark/luge";
import InsurgencyDragger from "../sub-components/InsurgencyDragger.vue";
export default {
  name: "BokoHaram",
  components: {
    InsurgencyDragger,
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
