import { THEME } from "../constant";

const getTheme = () => {
  const storedSettings = JSON.parse(localStorage.getItem("RLZ-X"));

  const languageSelected = storedSettings?.theme;

  if (storedSettings && languageSelected) {
    return languageSelected
  }

  return THEME.DARK
}

export { getTheme }