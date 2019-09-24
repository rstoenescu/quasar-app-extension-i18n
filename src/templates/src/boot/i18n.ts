import VueI18n from 'vue-i18n';

import messages from 'src/i18n';

export default ({ app, Vue }) => {
  Vue.use(VueI18n);
  app.i18n = new VueI18n({ messages, fallbackLocale: 'en-us', locale: 'en-us', silentFallbackWarn: true });
};
