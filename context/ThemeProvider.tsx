'use client';

import React from 'react';

import { ThemeProvider } from 'next-themes';

export const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </ThemeProvider>
  );
};
