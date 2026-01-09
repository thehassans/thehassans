'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, themes, getThemeById } from '@/lib/themes';

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  allThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  useEffect(() => {
    // Fetch theme from API on load
    const fetchTheme = async () => {
      try {
        const res = await fetch('/api/settings/theme');
        if (res.ok) {
          const data = await res.json();
          if (data.themeId) {
            setCurrentTheme(getThemeById(data.themeId));
          }
        }
      } catch (error) {
        console.error('Failed to fetch theme:', error);
      }
    };
    fetchTheme();
  }, []);

  useEffect(() => {
    // Apply theme CSS variables
    const root = document.documentElement;
    root.style.setProperty('--color-primary', currentTheme.colors.primary);
    root.style.setProperty('--color-primary-light', currentTheme.colors.primaryLight);
    root.style.setProperty('--color-primary-dark', currentTheme.colors.primaryDark);
    root.style.setProperty('--color-accent', currentTheme.colors.accent);
    root.style.setProperty('--color-background', currentTheme.colors.background);
    root.style.setProperty('--color-background-alt', currentTheme.colors.backgroundAlt);
    root.style.setProperty('--color-text', currentTheme.colors.text);
    root.style.setProperty('--color-text-muted', currentTheme.colors.textMuted);
    root.style.setProperty('--color-border', currentTheme.colors.border);
  }, [currentTheme]);

  const setTheme = (themeId: string) => {
    const theme = getThemeById(themeId);
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, allThemes: themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeContextProvider');
  }
  return context;
}
