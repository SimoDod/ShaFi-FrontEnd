import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { en } from "./languages/en";
import { de } from "./languages/de";
import { bg } from "./languages/bg";

void i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en,
    de,
    bg
  },
});

export default i18n;
