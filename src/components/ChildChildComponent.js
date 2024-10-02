import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ChildChildComponent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`p-5 border rounded-3 ${theme === "light" ? "bg-light text-dark  border-dark" : "bg-dark text-white  border-light"}`}>
      <h3>ChildChild Component</h3>
    </div>
  );
};

export default ChildChildComponent;
