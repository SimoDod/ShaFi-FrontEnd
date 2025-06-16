import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { en } from "./languages/en";
import { de } from "./languages/de";
import { bg } from "./languages/bg";

if (!localStorage.getItem("i18nextLng")) {
  localStorage.setItem("i18nextLng", "bg");
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "bg",
    resources: {
      en,
      de,
      bg,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
