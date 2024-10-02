import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ChildChildComponent from "./ChildChildComponent";

const ChildComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`p-5 border rounded-3 ${theme === "light" ? "bg-light text-dark  border-dark" : "bg-dark text-white  border-light"}`}>
      <h2>Child Component</h2>
      <ChildChildComponent />
    </div>
  );
};

export default ChildComponent;
