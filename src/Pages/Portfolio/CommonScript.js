import React from "react";

import { default as gh } from "../../Icons/gh.svg";

import "./PortfolioItemPage.css";

import PageContent from "../../CommonElements/PageContent";

const CommonScript = () => {
 return (
  <PageContent className="portfolio-item-page">
   <div
    className="heading-wrapper"
    style={{ justifyContent: "flex-start", gap: "2rem" }}
   >
    <h1>common.sh</h1>
    <a
     href="https://github.com/m-chmielewski/scripts/blob/main/mern/common.sh"
     target="_blank"
     rel="noreferrer"
    >
     <img
      alt="See on GitHub"
      src={gh}
     />
    </a>
   </div>
   <div className="tags-wrapper">
    <div>Shell</div>
    <div>npm</div>
    <div>DevOps</div>
   </div>
   <div>
    <h2>Features</h2>
    <ul>
     <li>
      Shell script streamlining development of{" "}
      <a
       href="/portfolio/common"
       target="_blank"
       rel="noreferrer"
      >
       🔗Common package
      </a>{" "}
      dependent apps
     </li>
     <li>Increments package version</li>
     <li>Builds package</li>
     <li>Publishes it to npm</li>
     <li>Updates package in developed app</li>
    </ul>
   </div>
  </PageContent>
 );
};

export default CommonScript;
