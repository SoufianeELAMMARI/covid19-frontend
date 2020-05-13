import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../translations/en.json";
import ar from "../translations/ar.json";
import fr from "../translations/fr.json";
import es from "../translations/es.json";

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    ar:{
      translation: ar,
    },
    fr:{
      translation: fr,
    },
    es:{
      translation: es,
    }
  },
  react: {
    wait: true,
  },
  keySeparator: '-',
})

export default i18n;