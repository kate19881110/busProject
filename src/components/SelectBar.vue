<template lang="pug">
el-select(v-model="cityData" placeholder="請選擇城市" size="large" style="width: 500px;" class="selectStyle" :popper-append-to-body="false" )
    el-option( 
        v-for="item in cityOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    )
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
export default defineComponent({
  setup() {
    const cityData = ref('');
    const cityOptions = reactive([
      {
        value: 'taipei',
        label: '台北市'
      },
      {
        value: 'miaoli',
        label: '苗栗市'
      }
    ]);
    return {
      cityOptions,
      cityData
    };
  }
});
</script>
<style lang="sass">
.selectStyle
  border-radius: 20px
  border:  transparent
</style>
