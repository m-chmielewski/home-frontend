import React, { useState } from "react";
import { default as ghLogo } from "../Icons/gh.svg";
import "./Home.css";

const Home = () => {
  const [hamburgerOpened, setHamburgerOpened] = useState(false);

  const [dropdownOpened, setDropdownOpened] = useState(false);

  return (
    <div className="page-wrapper">
      {/* <div className="horizontal-ruler"></div> */}

      <nav className="mobile">
        <a href="/">mchm.pl</a>
        <div
          className="hamburger-icon"
          onClick={() => setHamburgerOpened(!hamburgerOpened)}
        >
          &#9776;
        </div>
      </nav>
      <div className="content-wrapper">
        <ul
          className="hamburger-menu"
          style={hamburgerOpened ? { display: "block" } : { display: "none" }}
        >
          <li className="cv" onClick={() => setDropdownOpened(!dropdownOpened)}>
            <a href="#">CV</a>
            <ul
              className="dropdown"
              style={
                dropdownOpened ? { display: "block" } : { display: "none" }
              }
            >
              <li>
                <a href="/">Dark</a>
              </li>
              <li>
                <a href="/">Light</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Docs</a>
          </li>
          <li>
            <a href="/">Apps</a>
          </li>
          <li>
            <a href="https://github.com/m-chmielewski">
              <img src={ghLogo}></img>
            </a>
          </li>
        </ul>

        <div className="under-construction">Under construction</div>
      </div>
      <div className="footer">mchm.pl</div>

      {/* <div className="horizontal-ruler"></div> */}
      {/* <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle" className="hamburger">
        &#9776;
      </label>
      <nav className="navbar">
        <a href="/">mchm.pl</a>
        <ul className="nav-links">
          <div className="menu">
            <li className="cv">
              <a href="/">CV</a>
              <ul className="dropdown">
                <li>
                  <a href="/">Dark</a>
                </li>
                <li>
                  <a href="/">Light</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Docs</a>
            </li>
            <li>
              <a href="/">Apps</a>
            </li>
            <li>
              <a href="https://github.com/m-chmielewski">
                <img src={ghLogo}></img>
              </a>
            </li>
          </div>
        </ul>
      </nav>

      <ul className="hamburger-menu">
        <li className="cv">
          <a href="/">CV</a>
          <ul className="dropdown">
            <li>
              <a href="/">Dark</a>
            </li>
            <li>
              <a href="/">Light</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Docs</a>
        </li>
        <li>
          <a href="/">Apps</a>
        </li>
        <li>
          <a href="https://github.com/m-chmielewski">
            <img src={ghLogo}></img>
          </a>
        </li>
      </ul> */}

      {/* <div className="under-construction">Under construction</div> */}

      {/* <div className="top-bar">
        <a href="/">mchm.pl</a>
        <div className="top-bar-buttons-wrapper">
          <a href="https://github.com/m-chmielewski">
            <img src={ghLogo}></img>
          </a>
          <a>CV</a>
          <a>Docs</a>
          <a>Apps</a>
        </div>
      </div>
      <div className="wrapper"></div> */}
    </div>
  );
};

export default Home;
