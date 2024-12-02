import { useState, useEffect } from "react";
import { ThemeType } from "../types/Theme";

const themeKey = "appTheme";

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(
    (localStorage.getItem(themeKey) as ThemeType) || ThemeType.LIGHT
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(themeKey, theme);
  }, [theme]);

  return { themeKey, theme, setTheme };
};

export default useTheme;
