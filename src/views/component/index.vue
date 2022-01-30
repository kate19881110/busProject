<template lang="pug">
.main
  WebIcon(:is-type="'search'") 搜尋
  WebIcon(:is-type="'used'")
  BusBtn(:type="'green'" :color="'white'") 藍
   slot(:color="'white'") 
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import WebIcon from '@/components/WebIcon.vue';
import BusBtn from '@/components/BusBtn.vue';
export default defineComponent({
  components: { WebIcon, BusBtn }
});
</script>
<style lang="sass">
.main
    margin: 0 auto
</style>
