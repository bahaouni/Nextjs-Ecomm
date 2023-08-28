"use client"
import { createContext, useContext, useState, ReactNode } from "react";

type Themes = "dark" | "light" | "system";
type ThemeState = {
  theme: Themes;
  setTheme(theme: Themes): void;
};

const ThemeContext = createContext<ThemeState | null>(null);

export const useTheme = (): ThemeState => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Please use ThemeProvider in parent component");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>("dark");

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
              <div className={`theme ${theme}`}>

      {children}
      </div >
    </ThemeContext.Provider>
  );
};
