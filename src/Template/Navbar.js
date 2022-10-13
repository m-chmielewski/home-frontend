import React, { useState } from "react";
import { default as ghLogo } from "../Icons/gh.svg";

import "./Template.css";

const Navbar = () => {
 const [hamburgerOpened, setHamburgerOpened] = useState(false);

 const [dropdownOpened, setDropdownOpened] = useState(false);

 return (
  <>
   <nav>
    <a href="/">mchm.pl</a>
    <ul className="menu">
     <li className="cv">
      <a
       href="/CV-M-Chmielewski.pdf"
       target="_blank"
       rel="noreferrer"
      >
       CV
      </a>
     </li>
     <li>
      <a href="/docs/">Docs</a>
     </li>
     {/* <li>
      <a href="/apps/">Apps</a>
     </li> */}
     <li>
      <a
       href="https://github.com/m-chmielewski"
       target="_blank"
       rel="noreferrer"
      >
       <img src={ghLogo}></img>
      </a>
     </li>
    </ul>
    <div
     className="hamburger-icon"
     onClick={() => setHamburgerOpened(!hamburgerOpened)}
    >
     &#9776;
    </div>
   </nav>
   <ul
    className="hamburger-menu"
    style={hamburgerOpened ? { display: "block" } : { display: "none" }}
   >
    <li className="cv">
     <a
      href="/CV-M-Chmielewski.pdf"
      target="_blank"
      rel="noreferrer"
     >
      CV
     </a>
    </li>
    <li>
     <a href="/docs/">Docs</a>
    </li>
    {/* <li>
     <a href="/apps/">Apps</a>
    </li> */}
    <li>
     <a
      href="https://github.com/m-chmielewski"
      target="_blank"
      rel="noreferrer"
     >
      <img src={ghLogo}></img>
     </a>
    </li>
   </ul>
  </>
 );
};

export default Navbar;
