<template lang="pug">
.iconImg
    img( v-if="checkHover" :src="require(`@/assets/icon/${isType}Active.png`)")
    img( v-else :src="require(`@/assets/icon/${isType}Sign.png`)" @mouseover="mouseOver")
    //- slot {{isWord}}
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';

export default defineComponent({
  props: {
    isType: {
      type: String,
      default: ' '
    },
    isHover: {
      type: Boolean,
      required: false
    }
    // isWord:{
    //     type:String,
    //     default:" "
    // }
  },
  setup(props: { isHover: boolean; isType: string }) {
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
    padding: 10px
</style>
