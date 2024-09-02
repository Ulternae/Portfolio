import { CODES_LANGUAGES } from "../constant";

const getLanguage = () => {
  const supportedLanguages = Object.values(CODES_LANGUAGES);
  const defaultLanguage = CODES_LANGUAGES.ENGLISH;

  const storedSettings = JSON.parse(localStorage.getItem("RLZ-X"));
  const storedLanguage = storedSettings?.language;

  if (storedLanguage && supportedLanguages.includes(storedLanguage)) {
    return storedLanguage;
  }

  const browserLanguages = navigator.languages.map(
    (lang) => lang.split("-")[0]
  );
  const preferredLanguage = browserLanguages.find((lang) =>
    supportedLanguages.includes(lang)
  );

  return preferredLanguage || defaultLanguage;
};

export {getLanguage}