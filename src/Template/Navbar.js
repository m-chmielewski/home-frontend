import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Template.css";
import { default as ghLogo } from "../Icons/gh.svg";
import { default as hamburger } from "../Icons/hamburger.svg";
import { default as close } from "../Icons/close.svg";

const Navbar = () => {
 const [hamburgerOpened, setHamburgerOpened] = useState(false);

 return (
  <>
   <nav>
    <NavLink to="/">mchm.pl</NavLink>
    <ul className="menu">
     <li>
      <NavLink
       to="/CV-M-Chmielewski.pdf"
       target="_blank"
       rel="noreferrer"
      >
       CV
      </NavLink>
     </li>
     <li>
      <NavLink to="/portfolio/">Portfolio</NavLink>
     </li>
     <li>
      <a
       href="https://github.com/m-chmielewski"
       target="_blank"
       rel="noreferrer"
      >
       <img
        src={ghLogo}
        alt="See GitHub"
       />
      </a>
     </li>
    </ul>
    <button
     className="hamburger-btn"
     onClick={() => setHamburgerOpened(!hamburgerOpened)}
    >
     <img
      src={hamburgerOpened ? close : hamburger}
      alt={hamburgerOpened ? "Close menu" : "Open menu"}
     />
    </button>
   </nav>
   <ul
    className="hamburger-menu"
    style={hamburgerOpened ? { display: "block" } : { display: "none" }}
   >
    <li
     className="cv"
     onClick={() => setHamburgerOpened(false)}
    >
     <NavLink
      to="/CV-M-Chmielewski.pdf"
      target="_blank"
      rel="noreferrer"
     >
      CV
     </NavLink>
    </li>
    <li onClick={() => setHamburgerOpened(false)}>
     <NavLink to="/portfolio/">Portfolio</NavLink>
    </li>
    <li onClick={() => setHamburgerOpened(false)}>
     <a
      href="https://github.com/m-chmielewski"
      target="_blank"
      rel="noreferrer"
     >
      <img
       src={ghLogo}
       alt="See GitHub"
      ></img>
     </a>
    </li>
   </ul>
  </>
 );
};

export default Navbar;
