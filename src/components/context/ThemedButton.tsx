import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider"; // Asegúrate de que la ruta sea correcta

const ThemedButton: React.FC = () => {
  const context = useContext(ThemeContext);

  // Asegurarse de que context no sea undefined
  if (context === undefined) {
    throw new Error("useContext debe usarse dentro de un ThemeProvider");
  }

  const { theme, toggleTheme } = context;

  return (
    <button
      onClick={toggleTheme}
      style={{ background: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white" }}
    >
      Cambiar tema a {theme === "light" ? "oscuro" : "claro"}
    </button>
  );
};

export default ThemedButton;
