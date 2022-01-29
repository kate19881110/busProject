<template lang="pug">
.outer-layer
  router-view
  WebIcon(is-type="search")
  WebIcon(is-type="used")
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import WebIcon from '@/components/WebIcon.vue';
export default defineComponent({
  components: { WebIcon },
  setup() {
    return [];
  }
});
</script>
<style lang="sass">
.outer-layer
  position: relative
  width: 100vw
  height: 100vh
</style>
