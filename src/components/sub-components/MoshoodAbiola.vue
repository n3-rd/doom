<template>
  <div class="w-screen min-h-screen bg-[#2464ef]">
    <div
      class="date text-black text-[10vw] font-black uppercase text-center leading-[12rem] font-display"
    >
      <div>Abacha Years,</div>
      <div>1994</div>

      <div class="text-yellow-300 font-sans text-base py-4">
        <a
          href="https://en.wikipedia.org/wiki/Moshood_Abiola"
          target="_blank"
          class="underline"
          >Moshood Abiola</a
        >
        Imprisoned after proclaiming himself president
      </div>

      <div class="flex w-screen justify-center items-center">
        <div class="w-[80%]">
          <img
            src="/img/mko-abiola.jpg"
            alt="boko-haram"
            class="w-full grayscale mko-image z-10"
          />
          <div
            class="stats z-20 bg-transparent text-lg font-sans py-8 text-left"
          >
            <p>
              In 1994 Moshood Abiola, M.K.O. declared himself the lawful
              president of Nigeria in the Epetedo area of Lagos island, an area
              mainly populated by (Yoruba) Lagos Indigenes. He had recently
              returned from a trip to win the support of the international
              community for his mandate. After declaring himself president he
              was declared wanted and was accused of treason and arrested on the
              orders of military President General Sani Abacha, who sent 200
              police vehicles to bring him into custody. M.K.O. Abiola has been
              referred to as Nigeria's greatest statesman. His second wife
              Alhaja Kudirat Abiola was assassinated in Lagos in 1996 after
              declaring public support for her husband.
            </p>

            <p>
              Moshood Abiola was detained for four years, largely in solitary
              confinement with a Bible, Qur'an, and fourteen guards as
              companions. During that time, Pope John Paul II, Archbishop
              Desmond Tutu and human rights activists from all over the world
              lobbied the Nigerian government for his release. The sole
              condition attached to the release of Chief Abiola was that he
              renounce his mandate, something that he refused to do, although
              the military government offered to compensate him and refund his
              extensive election expenses. For this reason Chief Abiola became
              extremely troubled when Kofi Annan and Emeka Anyaoku reported to
              the world that he had agreed to renounce his mandate after they
              met with him to tell him that the world would not recognise a
              five-year-old election.
            </p>

            <div
              class="stat-numbers w-full grid grid-cols-2 gap-3 py-8 leading-normal text-center"
            >
              <div>
                <div class="main-number font-display text-[3.3rem]">
                  <div>4</div>
                  <div>Years</div>
                </div>
                <div class="sub font-sans">In solitary confinement</div>
              </div>
              <div>
                <div class="main-number font-display text-[3.3rem]">
                  <div>Moshood</div>
                  <div>Died</div>
                </div>
                <div class="sub font-sans">shortly after his release</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AbiolaDragger />
  </div>
</template>
<script>
import "sticksy";
import luge from "@waaark/luge";
import AbiolaDragger from "../sub-components/AbiolaDragger.vue";
export default {
  name: "BokoHaram",
  components: {
    AbiolaDragger,
  },
  mounted() {
    luge.lifecycle.refresh();
    const insurgencyImage = document.querySelector(".mko-image");
    // luge.scrollobserver.add(insurgencyImage);
    // insurgencyImage.addEventListener("scrollprogress", (e) => {
    //   // invert image on scroll
    //   insurgencyImage.style.filter(invert(0 + e.target.scrollProgress));
    // });
  },
};
</script>
