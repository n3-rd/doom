<script>
import BokoHaram from "./sub-components/BokoHaram.vue";
import CivilWar from "./sub-components/CivilWar.vue";
import CoupDetat from "./sub-components/CoupDetat.vue";
import MoshoodAbiola from "./sub-components/MoshoodAbiola.vue";

export default {
  name: "NewsScroller",
  components: { BokoHaram, CoupDetat, CivilWar, MoshoodAbiola },
  mounted() {
    luge.lifecycle.refresh();
  },
};
</script>
<template>
  <div>
    <CoupDetat />
    <CivilWar />
    <MoshoodAbiola />
    <BokoHaram />
  </div>
</template>
