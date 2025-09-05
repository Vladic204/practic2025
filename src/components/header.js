import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./style.css"; // Asigură-te că fișierul există

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="header__content">
        <h1>Contacts</h1>

        <a href="/cv.pdf" download className="download-cv">
          Download CV
        </a>

        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "🌞" : "🌙"}
        </button>
      </div>
    </header>
  );
}

export default Header;
