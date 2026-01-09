'use client';

import { useThemeContext } from '@/context/ThemeContext';

export function DynamicThemeStyles() {
  const { currentTheme } = useThemeContext();
  
  return (
    <style jsx global>{`
      :root {
        --color-primary: ${currentTheme.colors.primary};
        --color-primary-light: ${currentTheme.colors.primaryLight};
        --color-primary-dark: ${currentTheme.colors.primaryDark};
        --color-accent: ${currentTheme.colors.accent};
        --color-background: ${currentTheme.colors.background};
        --color-background-alt: ${currentTheme.colors.backgroundAlt};
        --color-text: ${currentTheme.colors.text};
        --color-text-muted: ${currentTheme.colors.textMuted};
        --color-border: ${currentTheme.colors.border};
      }
      
      .gradient-text {
        background: linear-gradient(135deg, ${currentTheme.colors.primary} 0%, ${currentTheme.colors.primaryLight} 50%, ${currentTheme.colors.primaryDark} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      ::selection {
        background: ${currentTheme.colors.primary}4d;
        color: inherit;
      }
      
      *::-webkit-scrollbar-thumb {
        background: ${currentTheme.colors.primary}4d;
      }
      
      *::-webkit-scrollbar-thumb:hover {
        background: ${currentTheme.colors.primary}80;
      }
      
      * {
        scrollbar-color: ${currentTheme.colors.primary}4d transparent;
      }
    `}</style>
  );
}

export function useThemeColors() {
  const { currentTheme } = useThemeContext();
  return currentTheme.colors;
}

export function useThemeGradient() {
  const { currentTheme } = useThemeContext();
  return currentTheme.colors.gradient;
}
