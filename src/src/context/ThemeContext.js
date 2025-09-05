// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from "react";

// 1. Creează contextul
export const ThemeContext = createContext();

// 2. Creează providerul
export const ThemeProvider = ({ children }) => {
  // Inițializează tema din localStorage sau folosește "light"
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("app-theme");
    return savedTheme ? savedTheme : "light";
  });

  // 3. Toggling light/dark
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // 4. Aplică tema pe `body` și salvează în localStorage
  useEffect(() => {
    document.body.setAttribute("data-theme", theme); // pentru CSS theming
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  // 5. Oferă contextul
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
