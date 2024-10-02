import './App.css';
import { ThemeProvider } from "./context/ThemeContext";
import ParentComponent from "./components/ParentComponent";
function App() {
  return (
    <ThemeProvider>
        <ParentComponent />
    </ThemeProvider>
  );
}

export default App;
