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
  const [mode, setMode] = useState('');

  const handleThemeChange = useCallback(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setMode('dark');
      document.body.classList.add('dark');
    } else {
      setMode('light');
      document.body.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    handleThemeChange();
  }, [handleThemeChange]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
