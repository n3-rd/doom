<script>
import BokoHaram from "./sub-components/BokoHaram.vue";
import CivilWar from "./sub-components/CivilWar.vue";
import CoupDetat from "./sub-components/CoupDetat.vue";

export default {
  name: "NewsScroller",
  components: { BokoHaram, CoupDetat, CivilWar },
  mounted() {
    luge.lifecycle.refresh();
  },
};
</script>
<template>
  <div>
    <CoupDetat />
    <CivilWar />
    <BokoHaram />
  </div>
</template>
