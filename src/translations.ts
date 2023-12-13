
import { createI18n } from 'vue-i18n';


const messages = {
  en: {
    appView: {
      home: 'Home',
      about: 'About Me',
      resume: 'Resume'
    },
    message: {
      hello: 'hello world'
    }
  },
  sp: {
    appView: {
      home: 'Principal',
      about: 'Sobre mí',
      resume: 'Curriculum'
    },
    message: {
      hello: 'español hola'
    }
  },
  ja: {
    appView: {
      home: '世界世界世界',
      about: '世界世界',
      resume: '世界世界'
    },
    message: {
      hello: '世界世界世界'
    }
  }
}

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

export default i18n;
