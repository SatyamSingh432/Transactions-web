import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import AuthPage from "./pages/LoginRegister";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
