import React, { useState } from "react";
import Switcher from "./Switcher";
import { ThemeContext } from "./ThemeContext";

const ThemeApp = () => {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  const themeValue = {
    theme,
    toggle,
  };

  const styles = {
    backgroundColor:theme === 'light'?'#fff':'#333',
    color: theme === 'light'?'#000':'#fff',
    minHeight:'100vh',
    padding: '2rem'
  }
  return (
    <ThemeContext.Provider value={themeValue}>
      <div style={styles}>
        <h5>Theme Switcher Example of useContext</h5>
        <Switcher />
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeApp;
