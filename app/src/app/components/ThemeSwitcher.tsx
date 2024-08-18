"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return theme === "light" ? (
    <MoonIcon className='w-12 h-12 m-5 text-gray-200' onClick={toggleTheme} />
  ) : (
    <SunIcon className='w-12 h-12 m-5 text-gray-200' onClick={toggleTheme} />
  );
};

export default ThemeSwitcher;
