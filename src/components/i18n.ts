import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      En: {
        translations: {
          "React-i18next" : "React-i18next",
          "To get started, edit <1>src/App.js</1> and save to reload." : "To get started, edit <1>src/App.js</1> and save to reload.",
          "Welcome to React" : "Welcome to React and react-i18next",
          welcome: "Hello <strong>World</strong>",
          "Learn more:" : "Learn more:"
        }
      },
      Kr: {
        translations: {
          "React-i18next": "리액트 i18next",
          "To get started, edit <1>src/App.js</1> and save to reload." : "지금 시작해보세요, <1>src/App.js</1>를 편집한 후 저장하고 리로드해보세요.",
          "Welcome to React": "React와 react-i18next를 사용해보세요.",
          welcome: "안녕하세요 <strong>World</strong>",
          "Learn more:": "더 배우고 싶다면:",
        }
      }
    },
    fallbackLng: "En",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
