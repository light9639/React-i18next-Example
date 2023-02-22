# ⚗️ i18next를 이용한 한,영 다국어 처리 예제.
:octocat: 바로 가기 : https://light9639.github.io/React-i18next-Example/

| <img src="https://user-images.githubusercontent.com/95972251/218401823-b7a50274-161e-4127-bbba-3c733e404eda.png" alt="Light" /> | <img src="https://user-images.githubusercontent.com/95972251/218401831-499edfe8-4cb9-4273-b856-e8b05c886723.png" alt="Dark" /> |
| ------------- | ------------- |

:sparkles: ⚗️ i18next를 이용한 한,영 다국어 처리 예제. :sparkles:
## :tada: React 프로젝트 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt-SWC 선택하면 생성 완료.

## 🚠 i18next 관련 라이브러리 설치하기
- `i18next` 관련 라이브러리 설치해야 하는데 설치해야 하는 라이브러리는 3가지로
- `i18next`, `i18next-browser-languagedetector`, `react-i18next`를 설치해야 한다.
```bash
$ npm install i18next i18next-browser-languagedetector react-i18next
# or
$ yarn add i18next i18next-browser-languagedetector react-i18next
```
## ✒️ main.tsx, App.tsx 수정 및 작성
### ⚡ main.tsx
- 밑에 서술되어 있는 `i18n.ts` 파일을 `main.tsx` 상단에 `import` 하면 모든 컴포넌트에서 사용할 수 있.
```typescript
import "./components/i18n";
```
### ⚡ App.tsx
- `react-i18next`에서 `useTranslation`, `Trans`를 `import`한다.
- `<Trans></Trans>`로 언어 설정을 바꿨을 경우 화면에 나타날 텍스트를 설정한다.
- `<Trans></Trans>` 안에 설정되어 있는 말을 그대로 텍스트로 넣거나, `{t("Welcome to React")}`를 통한 방법, `<Trans i18nKey="welcome">`으로 `props`를 통해 나타내는 방법이 있다.
- `changeLanguage` 함수를 만든 후 `onClick={() => changeLanguage("Kr")`를 클릭하면 한국어로 설정되고, `onClick={() => changeLanguage("En")`을 클릭하면 영어 버젼으로 설정된다.
```typescript 
import React from "react";
import reactLogo from './assets/react.svg'
import { useTranslation, Trans } from "react-i18next";
import "./App.css";

export default function App(): JSX.Element {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  const index = 11;

  return (
    <div className="App">
      <div>
        <a href="https://www.i18next.com/" target="_blank">
          <img src="https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=2.5,format=auto/https%3A%2F%2F4042378089-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-L9iS6WpW81N7RGRTQ-K%252Favatar.png%3Fgeneration%3D1523345851027218%26alt%3Dmedia" className="logo" alt="i18next logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1><Trans>React-i18next</Trans></h1>
      <div className="App-header">
        <h2>{t("Welcome to React")}</h2>
        <button className="TransButton" onClick={() => changeLanguage("Kr")}>한국어(Kr)</button>
        <button className="TransButton" onClick={() => changeLanguage("En")}>영어(EN)</button>
      </div>
      <div>
        <p><Trans>To get started, edit <code>src/App.js</code> and save to reload.</Trans></p>
        <p><Trans i18nKey="welcome">trans</Trans></p>
        <p><Trans>Welcome to React</Trans></p>
      </div>
      <div className="Link">
        <Trans>Learn more:</Trans>&nbsp;
        <a href="https://react.i18next.com">https://react.i18next.js</a>
      </div>
    </div>
  );
}
```
## 📝 components 파일 속 i18n.ts 수정 및 작성
### ⚡ i18n.ts
- `i18n.ts` 파일에 우선 밑의 코드에 있는 라이브러리를 `import` 한다.
- 그 다음 `En`, 'Kr'문서에 언어가 바뀔 경우 설정될 내용들을 작성한다.
```typescript
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
```
## 📎 출처
- <a href="https://lemontia.tistory.com/924">[react] 다국어 처리(react-i18next) 적용하기</a>
- <a href="https://all-dev-kang.tistory.com/entry/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%80%EB%A1%9C%EB%B2%8C%ED%95%9C-%EC%9B%B9%EC%9D%84-%ED%96%A5%ED%95%98%EC%97%AC-react-i18n-%EB%8B%A4%EA%B5%AD%EC%96%B4%EC%A7%80%EC%9B%90">[리액트] 글로벌한 웹을 향하여 (react-i18next, 다국어지원)</a>
