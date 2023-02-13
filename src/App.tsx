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
