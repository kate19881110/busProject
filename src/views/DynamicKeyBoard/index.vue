<template lang="pug">
el-input(:value="answer")

.main__bg
    h2 動態鍵盤
    .btn__layout
      BusBtn(:type="'red'" :color="'white'" @btnFn="inputValue('紅')") 紅
      BusBtn(:type="'blue'" :color="'white'" @btnFn="inputValue('藍')") 藍
      BusBtn(:type="'white'" :color="'green'") 1
      BusBtn(:type="'white'" :color="'green'") 2
      BusBtn(:type="'white'" :color="'green'") 3
      BusBtn(:type="'green'" :color="'white'") 綠
      BusBtn(:type="'coffee'" :color="'white'") 棕
      BusBtn(:type="'white'" :color="'green'") 4
      BusBtn(:type="'white'" :color="'green'") 5
      BusBtn(:type="'white'" :color="'green'") 6
      BusBtn(:type="'orange'" :color="'white'") 橘
      BusBtn(:type="'purple'" :color="'white'") 小
      BusBtn(:type="'white'" :color="'green'") 7
      BusBtn(:type="'white'" :color="'green'") 8
      BusBtn(:type="'white'" :color="'green'") 9
      BusBtn(:type="'white'" :color="'green'") 幹線
      BusBtn(:type="'white'" :color="'green'") 先導
      BusBtn(:type="'skin'" :color="'green'") 重設
      BusBtn(:type="'white'" :color="'green'") 0
      BusBtn(:type="'skin'" :color="'green'") 返回
      BusBtn(:type="'white'" :color="'green'") 市民
      BusBtn(:type="'white'" :color="'green'") 跳蛙
      BusBtn(:type="'white'" :color="'green'") 內科
      BusBtn(:type="'white'" :color="'green'") 南軟
      BusBtn(:type="'white'" :color="'green'") 夜間
      BusBtn(:type="'white'" :color="'green'") 貓空
      BusBtn(:type="'white'" :color="'green'") 懷恩
      BusBtn(:type="'white'" :color="'green'") F
      BusBtn(:type="'white'" :color="'green'") R
      BusBtn(:type="'white'" :color="'green'") T
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import BusBtn from '@/components/BusBtn.vue';
export default defineComponent({
  components: {
    BusBtn
  },
  setup() {
    const answer = reactive<string[]>([]);
    const inputValue = (isBtn: string): void => {
      console.log('isBtn:' + isBtn);
      const item = ref<string>(isBtn);
      answer.push(item.value);
      console.log(answer);
    };
    return {
      answer,
      inputValue
    };
  }
});
</script>
<style lang="sass" scoped>
@import @/styles/variables.sass
.main__bg
    background: #E9F4F5
    box-shadow: 0px 2px 8px 2px rgba(145, 145, 145, 0.6)
    border-radius: 20px
    max-width: 519px
    height: 593px
    padding: 20px 25px 142px
    h2
      font-size: 25px
      font-weight: bold
      color: $main-color
      margin-bottom: 20px
    .btn__layout
      height: 350px
      overflow-y: auto
      box-sizing: border-box
</style>
