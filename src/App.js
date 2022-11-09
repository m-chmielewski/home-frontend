import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./CommonElements/Shared.css";
import "./CommonElements/MediaQueries.css";

import Navbar from "./Template/Navbar";
import Footer from "./Template/Footer";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Release from "./Pages/Portfolio/Release";
import UnderConstruction from "./Pages/UnderConstruction";

const App = () => {
 return (
  <>
   <Router>
    <Navbar />
    <Routes>
     <Route
      path="/"
      element={<Home />}
     />
     <Route
      path="/portfolio"
      element={<Portfolio />}
     />
     <Route
      path="/portfolio/shoppin/"
      element={<UnderConstruction />}
     />
     <Route
      path="/portfolio/release/"
      element={<Release />}
     />
     <Route
      path="/portfolio/newProject/"
      element={<UnderConstruction />}
     />
    </Routes>
    <Footer />
   </Router>
  </>
 );
};

export default App;
