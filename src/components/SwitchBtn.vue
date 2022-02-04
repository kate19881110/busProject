<template lang="pug">
.switch-box
    input(type="checkbox" class="switch-style" v-model="checkValue"  @change="check")
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  props: {
    switchValue: {
      required: true,
      type: Boolean
    }
  },
  setup(props, context) {
    const checkValue = ref<boolean>(false);
    watch(
      () => props.switchValue,
      newVal => {
        checkValue.value = newVal;
      },
      { immediate: true }
    );
    watch(
      checkValue,
      newVal => {
        context.emit('update', newVal);
      },
      { immediate: false }
    );
    const check = (): void => {
      if (!props.switchValue) {
        checkValue.value = !checkValue.value;
      }
    };

    return { checkValue, check };
  }
});
</script>
<style lang="sass" scoped>
.switch-box
    display: inline-block
    input::before
        content: ""
        position: absolute
        width: 21px
        height: 21px
        border-radius: 50%
        top: 1px
        left: 1px
        background: #fff
        transition: 0.5s
    input[type="checkbox"]
            background:  #BEBEBE
    input:checked[type="checkbox"]:before
            left: 25px
    input:checked[type="checkbox"]
            background: #1ABC9C;
    .switch-style
        transition: 0.5s
        border: 0
        height: 23px
        width: 48px
        cursor:pointer
        position: relative
        appearance: none
        outline: none
        border-radius: 10px
</style>
