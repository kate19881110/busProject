import { LocaleMessage, LocaleMessageValue, RemoveIndexSignature } from '@intlify/core-base';
import { DeepReadonly, readonly, UnwrapNestedRefs } from 'vue';
import { ComposerTranslation, useI18n, VueMessageType } from 'vue-i18n';
import { Langs } from '@/const';

type I18n = {
  t: DeepReadonly<
    UnwrapNestedRefs<
      ComposerTranslation<
        {
          [x: string]: LocaleMessage<VueMessageType>;
        },
        string,
        RemoveIndexSignature<{
          [x: string]: LocaleMessageValue<VueMessageType>;
        }>,
        never,
        string,
        string
      >
    >
  >;
  setLanguage: (value: string) => void;
};

export function instanceI18n(): I18n {
  const { t, locale } = useI18n();

  const setLanguage = (value: string): void => {
    if ((Object.values(Langs) as string[]).includes(value)) {
      localStorage.setItem('language', value);
      locale.value = value;
    } else {
      console.log('unknown language:', value);
    }
  };
  return {
    t: readonly(t),
    setLanguage
  };
}
