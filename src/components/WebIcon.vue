<template lang="pug">
.iconImg(@mouseover="mouseOver")
    img( v-if="checkHover" :src="require(`@/assets/icon/${isType}Active.png`)" )
    img( v-else :src="require(`@/assets/icon/${isType}Sign.png`)" )
    slot(:class="[text]" )
</template>

<script lang="ts">
import { defineComponent, watch, ref, PropType } from 'vue';
const wordMap = {
  orange: 'word-orange',
  white: 'word-white'
};
type WordMapType = typeof wordMap;
export default defineComponent({
  props: {
    isType: {
      type: String,
      default: ' '
    },
    isHover: {
      type: Boolean,
      required: false
    },
    text: {
      type: String,
      default: 'text-word'
    },
    color: {
      type: String as PropType<keyof WordMapType>,
      default: ''
    }
  },
  setup(props) {
    const checkHover = ref<boolean>(false);
    const typeName = ref<string>('');

    watch(
      () => props.isHover,
      (newVal: boolean) => {
        checkHover.value = newVal;
      }
    );
    watch(
      () => props.isType,
      (newVal: string) => {
        typeName.value = newVal;
      }
    );
    const mouseOver = (): void => {
      if (!props.isHover) {
        checkHover.value = !checkHover.value;
        wordMap['orange'];
      } else {
        checkHover.value = !checkHover.value;
        wordMap['white'];
      }
    };
    return {
      checkHover,
      mouseOver
    };
  }
});
</script>
<style lang="sass">
.iconImg
    img
    padding: 10px
    display: block
    .text-word
        font-size: 20px
        font-weight: bold
        text-align: center
        display: block
.word-white
    color: #fff
.word-orange
    color: #FFB03A
</style>
