"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({ 
  children, 
  defaultTheme = "light" 
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Get initial theme from localStorage or system preference
  const getInitialTheme = (): Theme => {
    // During SSR, return the default theme
    if (typeof window === "undefined") {
      return defaultTheme;
    }

    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      return storedTheme;
    }

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    
    return systemPrefersDark ? "dark" : defaultTheme;
  };

  // Initialize theme on mount
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setThemeState(initialTheme);
    setMounted(true);
  }, []);

  // Update document class and localStorage when theme changes
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  // Always provide the context
  const contextValue = {
    theme: mounted ? theme : defaultTheme,
    toggleTheme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}