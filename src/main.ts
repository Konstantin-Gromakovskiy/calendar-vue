import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { en, ru } from '@/locales'

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: { ru, en },
  datetimeFormats: {
    ru: {
      month: { month: 'long' },
      weekday: { weekday: 'short' },
      full: { year: 'numeric', month: 'long', day: 'numeric' }
    },
    en: {
      month: { month: 'long' },
      weekday: { weekday: 'short' },
      full: { year: 'numeric', month: 'long', day: 'numeric' }
    }
  }
})


createApp(App).use(i18n).mount('#app')
