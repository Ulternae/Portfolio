import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./translation/en.json";
import translationES from "./translation/es.json";
import translationGL from "./translation/gl.json";
import translationAR from "./translation/ar.json";
import { getLanguage } from "./utils/getLanguage";

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  gl: {
    translation: translationGL,
  },
  ar: {
    translation: translationAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage(),
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
