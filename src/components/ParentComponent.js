import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`p-5 h-full ${theme === "light" ? "bg-light text-dark" : "bg-dark text-white"}`}>
      <h1>Parent Component</h1>
      <button className={`btn mb-5 ${theme === "light" ? "btn-dark" : "btn-light"}`} onClick={toggleTheme}>Toggle Theme</button>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
