'use client';

import React, { createContext, useState, useEffect } from 'react';

type ThemeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState('');

  const handleThemeChange = () => {
    if (mode === 'dark') {
      setMode('light');
      document.documentElement.classList.add('light');
    } else {
      setMode('dark');
      document.documentElement.classList.add('dark');
    }
  };

  //   useEffect(() => {
  //     handleThemeChange();
  //   }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
