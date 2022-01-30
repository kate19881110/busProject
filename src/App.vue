<template lang="pug">
.outer-layer
  router-view

</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
