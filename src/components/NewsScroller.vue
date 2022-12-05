<script>
import BokoHaram from "./sub-components/BokoHaram.vue";
import CoupDetat from "./sub-components/CoupDetat.vue";

export default {
  name: "NewsScroller",
  components: { BokoHaram, CoupDetat },
  mounted() {
    luge.lifecycle.refresh();
  },
};
</script>
<template>
  <div>
    <CoupDetat />
    <BokoHaram />
  </div>
</template>
