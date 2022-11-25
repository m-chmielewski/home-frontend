import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

import Arrow from "./Arrow";

const Button = ({ inactive, ...props }) => {
 if (props.href) {
  if (props.href.startsWith("https://")) {
   return (
    <a
     className="btn nav"
     href={props.href}
     target="_blank"
     rel="noreferrer"
     style={props.style}
    >
     {props.children}
     <Arrow right />
    </a>
   );
  }

  return (
   <Link
    to={props.href}
    className="btn nav"
   >
    {props.children}
    <Arrow right />
   </Link>
  );
 }

 return (
  <button
   onClick={props.onClick}
   className={`btn ${props.variant} ${inactive ? "inactive" : ""}`}
   {...props}
  >
   {props.children}
  </button>
 );
};

export default Button;
