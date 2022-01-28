<template lang="pug">
.main
  .login__section
    .title {{t('login.title')}}
    .form
      .input__title {{t('login.account.label')}}
      .input
        .placeholder {{t('login.account.placeholder')}}
        input(v-model='login.account')
      .input__title {{t('login.password.label')}}
      .input
        .placeholder {{t('login.password.placeholder')}}
        input(v-model='login.password' type='password')
      .button.self__button(@click='handleLogin')
        span 登入
  .copyright Copyright © 2021 {{t('copyright')}}
  .language__section
    .globe__icon
    .language__options
      select(v-model='language')
        option(value='cn') 简中
        option(value='tw') 繁中
        option(value='en') english
</template>

<script lang="ts">
import { defineComponent, ref, watch, reactive } from 'vue';
import { Router, useRouter } from 'vue-router';
import { instanceI18n } from '../../i18n/instance';

export default defineComponent({
  setup() {
    const { t, setLanguage } = instanceI18n();
    type user = {
      account: string | null;
      password: string | null;
    };
    const login = reactive<user>({
      account: null,
      password: null
    });
    const router: Router = useRouter();
    const language = ref<string>('cn');

    watch(
      () => language.value,
      newVal => {
        setLanguage(newVal);
      }
    );

    const handleLogin = (): void => {
      if (login.account !== 'admin' && login.password !== 'admin') {
        alert('帳號密碼錯誤請重新輸入！');
      } else {
        if (router.currentRoute.value.path == '/deprecated/login') {
          router.push({ path: '/deprecated/dashboard' });
        } else {
          router.push({ path: '/' });
        }
      }
    };
    return { login, handleLogin, t, language };
  }
});
</script>

<style lang="sass" scoped>
@import @/styles/common.sass

.input__title
  margin-bottom: .3rem
  color: $dark-text-color
  font-weight: 700
.input
  position: relative
  input
    margin-bottom: 1.5rem
    width: 100%
    height: 2rem
    padding: 4px 12px 4px 114px
    border: 2px solid #DDD
    border-radius: 4px
  input:focus
    outline: none
  .placeholder
    position: absolute
    top: 0
    left: 0
    transform: translate(8px, .5rem)
    font-weight: 800
    color: $dark-text-color

.main
  position: relative
  width: 100vw
  height: 100vh
  background: rgba(143, 224, 203, .15)
  .title
    font-size: 1.6rem
    font-width: 900
    margin-bottom: 1rem
  .login__section
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    padding: 5% 10%
    z-index: 3000
    // color: $dark-text-color
    .form
      position: relative
      width: 100%
      height: 100%
      .button
        width: 100%
        height: 3rem
        background: $main-color
        margin-top: 1rem
        float: right
        // border-radius: 18px
        font-size: 1.2rem

  .copyright
    position: absolute
    bottom: 0
    left: 0
    transform: translate(0%, -100%)
    width: 100%
    text-align: center
    height: 1rem
    color: $light-text-color
    font-weight: 600
    font-size: 0.9rem
    display: inline-block

  .language__section
    position: absolute
    top: 1rem
    right: 1rem
    width: 6rem
    height: 2rem
    color: $light-text-color
    font-weight: 600
    z-index: 4000
    .globe__icon
      position: relative
      margin-right: .25rem
      float: left
      &:after
        mask: url('') no-repeat 50% 50%
        background-color: #AAA
        display: inline-block
        position: relative
        top: 0
        left: 0
        transform: translate(0, 0)
        content: ''
        display: block
        height: 1.5rem
        width: 1.5rem
        z-index: 100
    .language__options
      position: relative
      height: 1.5rem
      width: calc( 100% - 2rem)
      float: left
      select
        width: 100%
        height: 100%
        border-radius: 4px
        border: 2px solid #DDD
</style>
