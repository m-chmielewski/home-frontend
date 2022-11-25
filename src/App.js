import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./CommonElements/Shared.css";
import "./CommonElements/MediaQueries.css";

import Navbar from "./Template/Navbar";
import Footer from "./Template/Footer";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Shoppin from "./Pages/Portfolio/Shoppin";
import Chefin from "./Pages/Portfolio/Chefin";
import Common from "./Pages/Portfolio/Common";
import Release from "./Pages/Portfolio/Release";
import CommonScript from "./Pages/Portfolio/CommonScript";
import NewProject from "./Pages/Portfolio/NewProject";
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
      element={<Shoppin />}
     />
     <Route
      path="/portfolio/chefin/"
      element={<Chefin />}
     />
     <Route
      path="/portfolio/common/"
      element={<Common />}
     />
     <Route
      path="/portfolio/commonScript/"
      element={<CommonScript />}
     />
     <Route
      path="/portfolio/release/"
      element={<Release />}
     />
     <Route
      path="/portfolio/newProject/"
      element={<NewProject />}
     />
     <Route
      path="*"
      element={<UnderConstruction />}
     />
    </Routes>
    <Footer />
   </Router>
  </>
 );
};

export default App;
