<template lang="pug">
button( class="basic-size" :class="[btn,colorBtn,text,colorWord]")
    slot
</template>
<script lang="ts">
import { defineComponent, computed, ref, PropType } from 'vue';

const colorMap = {
  blue: 'bg-blue',
  red: 'bg-red',
  green: 'bg-green',
  coffee: 'bg-coffee',
  orange: 'bg-orange',
  purple: 'bg-purple',
  skin: 'bg-skin',
  white: 'bg-white'
};

const wordMap = {
  green: 'word-green',
  white: 'word-white'
};
type ColorMapType = typeof colorMap;

type WordMapType = typeof wordMap;
export default defineComponent({
  props: {
    btn: {
      type: String,
      default: 'basic-style'
    },
    type: {
      type: String as PropType<keyof ColorMapType>,
      default: ''
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
    const colorBtn = computed(() => {
      const typeWord = ref<keyof ColorMapType>(props.type);
      return typeWord.value ? colorMap[typeWord.value] : colorMap['blue'];
    });
    const colorWord = computed(() => {
      const WordColor = ref<keyof WordMapType>(props.color);
      return WordColor.value ? wordMap[WordColor.value] : wordMap['green'];
    });
    return { colorBtn, colorMap, colorWord };
  }
});
</script>
<style lang="sass">
.basic-size
    width: 75px
    height: 70px
    border-radius: 15px
    margin: 10px
    border-color: transparent
    box-shadow: 5px 5px 5px 2px #cccccc
.text-word
   font-size: 20px
   font-weight: bold
.bg-red
    background: #DE4960
.bg-blue
    background: #2D9CDB
.bg-green
    background: #2398A1
.bg-coffee
    background: #BC671C
.bg-orange
    background: #FFB03A
.bg-purple
    background: #9B51E0
.bg-skin
    background: #FAF2E6
.bg-white
    background: #fff
.word-white
    color: #fff
.word-green
    color: #2398A1
</style>
