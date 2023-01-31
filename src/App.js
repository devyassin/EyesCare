import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Cours from "./Components/Cours/Cours";
import About from "./Components/About/About";
import Doctors from "./Components/Doctors/Doctors";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Cours />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
