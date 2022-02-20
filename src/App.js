import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Comics from "./pages/Comics";
import Character from "./pages/Character";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Comics" element={<Comics />} />
        <Route path="/Character" element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;
