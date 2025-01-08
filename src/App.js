import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Hobbies from "./pages/hobbies";
function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
