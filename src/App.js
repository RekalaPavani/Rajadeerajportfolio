import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />   {/* Home page */}
      </Routes>
    </Router>
  );
}

export default App;
