import { createI18n } from 'vue-i18n'
import enTranslation from '@/i18n/en.json'
import ptTranslation from '@/i18n/pt.json'
import commonTranslation from '@/i18n/common.json'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'pt',
  legacy: false,
  messages: {
    pt: { ...ptTranslation, ...commonTranslation },
    en: { ...enTranslation, ...commonTranslation },
  },
})

export default i18n
