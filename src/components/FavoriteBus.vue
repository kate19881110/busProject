<template lang="pug">
.search__layout
    .title__word 
        B 公車號碼
        p 路線方向
    .favorite__list 
        img(:src="require(`@/assets/icon/${favorite.includes(symbol)?'isFavorite':'noFavorite'}.png`)"
             class="icon__size"
             @click="toggleFavorite")
        img(:src="require(`@/assets/icon/${favorite.includes(symbol)?'info':'nextArrow'}.png`)"
             class="icon__size")
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  setup() {
    const favorite = reactive(['']);
    const symbol = ref<string>('symbol');
    if (window.localStorage.getItem('favorite') !== null) {
      favorite.values = JSON.parse(window.localStorage.getItem('favorite') || '{}');
    }
    const toggleFavorite = (): void => {
      // indexOf() =>  找到匹配的, 沒有就返回 -1
      // splice => array.splice(索引位置,刪除第幾個元素,插入元素)
      const index = favorite.indexOf(symbol.value);
      if (index === -1) {
        favorite.push(symbol.value);
      } else {
        favorite.splice(index, 1);
      }
      localStorage.setItem('favorite', JSON.stringify(favorite));
    };

    return {
      toggleFavorite,
      favorite,
      symbol
    };
  }
});
</script>
<style lang="sass" scoped>
@import @/styles/common.sass
.search__layout
    @extend .flex__between
    .favorite__list
        @extend .flex__row
.icon__size
    width: 24px
    height: 24px
</style>
