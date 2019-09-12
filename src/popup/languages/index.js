import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ZH from './zh'
import EN from './en'
import FR from './fr'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ZH',
  messages: {
    ZH,
    EN,
    FR
  },
  silentTranslationWarn: true
})
export default i18n
