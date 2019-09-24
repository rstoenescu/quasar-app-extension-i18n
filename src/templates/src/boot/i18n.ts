import Vue from 'vue';
import VueI18n from 'vue-i18n';

import messages from 'src/i18n';

Vue.use(VueI18n);

export default ({ app }) => app.i18n = new VueI18n({ messages, fallbackLocale: 'en-us', locale: 'en-us', silentFallbackWarn: true });
