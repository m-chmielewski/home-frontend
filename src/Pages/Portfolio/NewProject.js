import React from "react";

import { default as gh } from "../../Icons/gh.svg";

import "./PortfolioItemPage.css";

import PageContent from "../../CommonElements/PageContent";

const NewProject = () => {
 return (
  <PageContent className="portfolio-item-page">
   <div
    className="heading-wrapper"
    style={{ justifyContent: "flex-start", gap: "2rem" }}
   >
    <h1>newProject.sh</h1>
    <a
     href="https://github.com/m-chmielewski/scripts/blob/main/mern/newProject.sh"
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
    <div>MERN</div>
    <div>DevOps</div>
   </div>
   <div>
    <h2>Features</h2>
    <ul>
     <li>Shell script streamlining creation of new MERN project</li>
     <li>Configures domains on remote server</li>
     <li>Configures databases on remote server</li>
     <li>Creates folder structure on local machine</li>
     <li>Creates project configuration files</li>
     <li>Initializes Express.js and React projects</li>
     <li>Installs necessary dependencies</li>
     <li>Removes unnecessary files</li>
     <li>Copies boilerplate files from template</li>
     <li>Creates GitHub repositories</li>
     <li>Pushes newly created projects to GitHub</li>
    </ul>
   </div>
  </PageContent>
 );
};

export default NewProject;
