import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HTTPApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HTTPApi)
  .init({
    lng: "fa",
    backend: {
      /* translation file path */
      loadPath: "/locales/{{lng}}/translation.json",
    },
    fallbackLng: "fa",
    debug: false,
    keySeparator: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
  });

export default i18next;
