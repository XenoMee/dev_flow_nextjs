'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';

type ThemeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<string>('light');

  const handleThemeChange = useCallback(() => {
    localStorage.theme = mode;

    const currentTheme = localStorage.getItem('theme');
    const isSysThemeDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (currentTheme === 'system') localStorage.removeItem('theme');

    if (
      currentTheme === 'dark' ||
      (!('theme' in localStorage) && isSysThemeDark)
    ) {
      localStorage.theme = 'dark';
      document.body.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.body.classList.remove('dark');
    }
  }, [mode]);

  useEffect(() => {
    handleThemeChange();
  }, [handleThemeChange]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
