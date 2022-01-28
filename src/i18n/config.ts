import { createI18n, DefineLocaleMessage, I18n } from 'vue-i18n';

import { Langs, DefaultLang } from '@/const';
const loadMessage = (lang: string) => {
  return <Promise<DefineLocaleMessage>>new Promise((resolve, reject) => {
    try {
      import(`./langs/${lang}.yaml`).then(module => {
        resolve(module.default);
        console.log(`read ${lang}.yaml success`);
      });
    } catch (error) {
      reject();
      console.log(`read ${lang}.yaml fail`);
    }
  });
};

async function i18n(): Promise<I18n> {
  const locale = localStorage.getItem('language') || DefaultLang;
  const langs = [{ lang: Langs.CN }, { lang: Langs.EN }, { lang: Langs.TW }];
  const [cn, en, tw] = await Promise.all(langs.map(({ lang }) => loadMessage(lang)));
  return createI18n({
    legacy: false,
    locale,
    fallbackLocale: locale,
    messages: {
      cn,
      en,
      tw
    }
  });
}

export default i18n;
