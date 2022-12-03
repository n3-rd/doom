<script>
import BokoHaram from "./sub-components/BokoHaram.vue";

export default {
  name: "NewsScroller",
  components: { BokoHaram },
  mounted() {
    luge.lifecycle.refresh();
  },
};
</script>
<template>
  <div>
    <BokoHaram />
  </div>
</template>
