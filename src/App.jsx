import { Welcome } from "./pages/Welcome";
import "./index.css";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { AboutMe } from "./pages/AboutMe";
import { Settings } from "./pages/Settings";
import { useEffect, useState } from "react";
import { getLanguage } from "./utils/getLanguage";
import { getTheme } from "./utils/getTheme";
import { CODES_LANGUAGES, LOCAL_STORAGE, THEME } from "./constant";
const App = () => {
  const [theme, setTheme] = useState(getTheme());
  const [language, setLanguage] = useState(getLanguage());
  const [loading, setLoading] = useState({ theme: true, language: true });
  useEffect(() => {
    const body = document.querySelector("body");
    if (theme === THEME.DARK) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }

    const getSettings = JSON.parse(localStorage.getItem("RLZ-X"));
    if (getSettings) {
      localStorage.setItem(
        "RLZ-X",
        JSON.stringify({ ...getSettings, [LOCAL_STORAGE.THEME]: theme })
      );
    } else {
      localStorage.setItem(
        "RLZ-X",
        JSON.stringify({
          [LOCAL_STORAGE.LANGUAGE]: language,
          [LOCAL_STORAGE.THEME]: theme,
        })
      );
    }

    setLoading(false);
  }, [theme]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (language === CODES_LANGUAGES.ARAB) {
      htmlElement.dir = "rtl";
    } else {
      htmlElement.dir = "ltr";
    }

    const getSettings = JSON.parse(localStorage.getItem("RLZ-X"));
    if (getSettings) {
      localStorage.setItem(
        "RLZ-X",
        JSON.stringify({ ...getSettings, [LOCAL_STORAGE.LANGUAGE]: language })
      );
    } else {
      localStorage.setItem(
        "RLZ-X",
        JSON.stringify({
          [LOCAL_STORAGE.THEME]: theme,
          [LOCAL_STORAGE.LANGUAGE]: language,
        })
      );
    }
    setLoading(false);
  }, [language]);

  const isLoading = loading.theme || loading.language;

  return (
    <>
      <div className="transition-colors duration-300 relative px-3 sm:px-0 py-32 pt-48 bg-lt2-300 dark:bg-eur-800 w-full min-h-screen h-full flex flex-col gap-36">
        {isLoading && <div className="bg-lt2-300 dark:bg-eur-800" />}
        {!isLoading && (
          <>
            <Settings
              theme={theme}
              language={language}
              setTheme={setTheme}
              setLanguage={setLanguage}
            />
            <Welcome className="ml-3 sm:ml-auto w-full h-full max-w-[1000px] rounded-l-lg bg-lt2-600 dark:bg-eur-700 px-6 sm:px-12 py-8 lg:py-16 grid grid-cols-[2fr_1fr] sm:grid-cols-3 gap-y-8 gap-x-2 md:gap-x-16 lg:gap-y-4 rtl:space-x-reverse" />
            <Experience className="-ml-3 sm:-ml-0 sm:mr-auto w-full h-full max-w-[1000px] rounded-r-lg bg-lt2-600 dark:bg-eur-700 px-6 sm:px-12 py-8 lg:py-16 rtl:space-x-reverse grid sm:grid-cols-[2fr_3fr] gap-y-6" />
            <Projects className="ml-3 sm:ml-auto w-full h-full max-w-[1000px] rounded-l-lg bg-lt2-600 dark:bg-eur-700 px-6 sm:px-12 py-8 lg:py-16 flex flex-col gap-16 " />
            <AboutMe className="-ml-3 sm:-ml-0 sm:mr-auto w-full h-full max-w-[1000px] rounded-r-lg bg-lt2-600 dark:bg-eur-700 px-6 sm:px-12 py-8 lg:py-16 rtl:space-x-reverse grid gap-16" />
          </>
        )}

        {/* <button onClick={toogleDirection} className="text-white"> DIRECTION </button> */}
      </div>
    </>
  );
};

export { App };
