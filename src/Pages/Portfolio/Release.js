import React from "react";
import { default as gh } from "../../Icons/gh.svg";

import "./PortfolioItemPage.css";

import PageContent from "../../CommonElements/PageContent";

const Release = () => {
 return (
  <PageContent className="portfolio-item-page">
   <h1>
    release.sh
    <a
     href="https://github.com/m-chmielewski/scripts/blob/main/mern/release.sh"
     target="_blank"
     rel="noreferrer"
    >
     <img
      alt="See on GitHub"
      src={gh}
     ></img>
    </a>
   </h1>
   <div className="tags-wrapper">
    <div>Bash</div>
    <div>MERN</div>
    <div>DevOps</div>
   </div>
   <h2>Summary</h2>
   <p>
    The script streamlines all the steps necessary to release MERN app to remote
    server.
    <br />
    <br /> Both, frontend and backend are available under the same domain. React
    app is served by Express.
   </p>
   <h2>Installation</h2>
   <code>
    cd ~<br />
    <br />
    git clone git@github.com:m-chmielewski/scripts.git
    <br />
    <br />
    echo "alias release='source ~/scripts/mern/release.sh'" >> ~/.zshrc
   </code>
   <h2>Dependencies</h2>
   The script works only with projects:
   <ul>
    <li>
     created using <a href="/docs/newProject/">🔗newProject</a>
    </li>
    <li>hosted with small.pl</li>
   </ul>
   <h2>Todo</h2>
   <ul>
    <li style={{ textDecorationLine: "line-through" }}>
     Destination environment choice: dev/prod
    </li>
    <li>Project and environment choice with arrow keys</li>
   </ul>
   {/* <p>The script performs following steps:</p>
      <ol>
        <li>
          Removes old versions of React and Express apps from the remote server.
        </li>
        <li>
          Replaces .env file in local React project directory with remote
          server's environment relevant one.
        </li>
        <li>Creates optimized build of React app.</li>
        <li>Uploads React app build to the remote server.</li>
        <li>Removes React app build from local project directory.</li>
        <li>
          Replaces .env file in local React project directory with local
          environment relevant one.
        </li>
        <li>
          Moves node_modules and package-lock.json out of Express project
          directory and puts them into temporary container directory.
        </li>
        <li>
          Uploads Express app local project directory content to the remote
          server.
        </li>
        <li>
          Uploads remote server's environment relevant .env file to the remote
          server.
        </li>
        <li>
          Moves node_modules and package-lock.json out of temporary container
          directory and puts them into local Express project directory.
        </li>
      </ol> */}
  </PageContent>
 );
};

export default Release;
