import Vue from 'vue';
import VueI18n from 'vue-i18n';
import pl from '@/translation/locale/pl/';
import validatePl from 'vee-validate/dist/locale/pl.json';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'pl',
  messages: {
    pl: {
      ...pl,
      validation: validatePl.messages,
    },
  },
});
