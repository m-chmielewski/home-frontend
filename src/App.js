import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./Shared.css";

import Navbar from "./Template/Navbar";
import Footer from "./Template/Footer";
import Home from "./Pages/Home";
import Docs from "./Pages/Docs";
import Release from "./Pages/Docs/Release";
import NewProject from "./Pages/Docs/NewProject";
import Apps from "./Pages/Apps";

const App = () => {
 return (
  <>
   <Navbar />
   <Router>
    <Routes>
     <Route
      exact
      path="/"
      element={<Home />}
     />
     <Route
      exact
      path="/docs"
      element={<Docs />}
     />
     <Route
      exact
      path="/docs/release/"
      element={<Release />}
     />
     <Route
      exact
      path="/docs/newProject/"
      element={<NewProject />}
     />
     <Route
      exact
      path="/apps"
      element={<Apps />}
     />
    </Routes>
   </Router>
   <Footer />
  </>
 );
};

export default App;
