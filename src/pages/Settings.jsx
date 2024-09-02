import { useEffect, useRef, useState } from "react";
import { DarkMode } from "../assets/DarkMode";
import { LightMode } from "../assets/LightMode";
import { CODES_LANGUAGES, THEME, NAVIGATE, NETWORK as N } from "../constant";
import { useTranslation } from "react-i18next";
import { Download } from "../assets/Download";
import { openNewTab } from "../utils/openNewTab";

const Settings = ({ theme, setTheme, language, setLanguage }) => {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(theme === THEME.DARK);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const languageRef = useRef(null);
  const cvRef = useRef(null);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
    setTheme((prev) => (prev === THEME.DARK ? THEME.LIGHT : THEME.DARK));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setShowLanguage(false);
      }
      if (cvRef.current && !cvRef.current.contains(event.target)) {
        setShowCV(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute top-12 left-0 bg-lt2-600 dark:bg-eur-700 rounded-r-lg flex gap-4 pl-12 pr-8 py-3 items-center">
      <div
        onClick={toggleMode}
        className="cursor-pointer transition-all duration-500"
      >
        {isDarkMode ? (
          <DarkMode className="fill-lt2-200 dark:fill-eur-200 w-5 h-5 transition-all duration-500" />
        ) : (
          <LightMode className="fill-lt2-200 dark:fill-eur-200 w-5 h-5 transition-all duration-500" />
        )}
      </div>
      <div className="relative" ref={languageRef}>
        <h1
          className="cursor-pointer leading-none text-lg font-medium text-lt2-200 dark:text-eur-200"
          onClick={() => setShowLanguage(true)}
        >
          {t(`languageCodes.${language}`).toUpperCase()}
        </h1>
        {showLanguage && (
          <div className="min-w-52 absolute left-0 mt-5 rounded-lg py-4 bg-lt2-600 dark:bg-eur-700">
            {Object.values(CODES_LANGUAGES).map((lng) => {
              const currentLanguageSelected = lng === language;
              return (
                <div
                  key={lng}
                  className={`${
                    currentLanguageSelected
                      ? "dark:bg-eur-300/20 bg-lt2-200/20"
                      : ""
                  }`}
                >
                  <p
                    className="cursor-pointer py-1 px-4 text-lg font-medium hover:bg-lt2-200/40 hover:dark:bg-eur-300/40 hover:dark:text-eur-100 hover:text-lt2-100 text-lt2-200 dark:text-eur-200"
                    onClick={() => {
                      setLanguage(lng);
                      setShowLanguage(false);
                      i18n.changeLanguage(lng)
                    }}
                  >
                    {t(`languages.${lng}`)}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="h-5 w-1 rounded-lg dark:bg-eur-400 bg-lt2-300" />
      <div className="relative" ref={cvRef}>
        <h1
          className="cursor-pointer leading-none text-lg font-medium text-lt2-200 dark:text-eur-200"
          onClick={() => setShowCV(true)}
        >
          {t("settings.cv").toUpperCase()}
        </h1>
        {showCV && (
          <div
            className="sm:min-w-[280px] w-auto absolute left-0 mt-5 rounded-lg py-4 bg-lt2-600 dark:bg-eur-700 flex items-center justify-center px-4 gap-1"
            onClick={() => openNewTab(`${NAVIGATE[N.PORTFOLIO]}_${language}.pdf`)}
          >
            <Download
              className={"fill-lt2-100 dark:fill-eur-100 min-w-8 min-h-8"}
              secondaryColor={"fill-none"}
            />
            <p className="cursor-pointer leading-tight text-eur-100 dark:text-lt2-100 font-medium text-lg">
              {t("settings.seeCV")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export { Settings };
