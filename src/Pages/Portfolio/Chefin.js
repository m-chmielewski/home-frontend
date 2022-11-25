import React from "react";

import { default as gh } from "../../Icons/gh.svg";

import "./PortfolioItemPage.css";

import Button from "../../CommonElements/Button";
import PageContent from "../../CommonElements/PageContent";

const Chefin = () => {
 return (
  <PageContent className="portfolio-item-page">
   <div className="heading-wrapper">
    <h1>Chefin</h1>
    <Button
     href="https://chefin.mchm.pl"
     style={{ backgroundColor: "var(--blue)", gap: "1rem" }}
    >
     Open app
    </Button>
   </div>
   <div className="columns-wrapper">
    <div>
     <h2>Source</h2>
     <div className="source-wrapper">
      <a
       href="https://github.com/m-chmielewski/chefin-frontend"
       target="_blank"
       rel="noreferrer"
      >
       <img
        alt="See on GitHub"
        src={gh}
       ></img>
       <span>Frontend</span>
      </a>
      <a
       href="https://github.com/m-chmielewski/chefin-backend"
       target="_blank"
       rel="noreferrer"
      >
       <img
        alt="See on GitHub"
        src={gh}
       ></img>
       <span>Backend</span>
      </a>
     </div>
    </div>
    <div>
     <h2>Tags</h2>
     <div className="tags-wrapper">
      <div>React</div>
      <div>Express.js</div>
      <div>MongoDB</div>
     </div>
    </div>
   </div>
   <div>
    <h2>Features</h2>
    <ul>
     <li>PWA I use to store my recipes</li>
     <li>View recipes list</li>
     <li>View chosen recipe</li>
     <li>
      Add chosen ingredients to{" "}
      <a
       href="https://mchm.pl/portfolio/shoppin/"
       target="_blank"
       rel="noreferrer"
      >
       🔗shopping list
      </a>
     </li>
     <li>Add a new recipe to the database</li>
    </ul>
   </div>
   <div>
    <h2>ToDo</h2>
    <ul>
     <h3 style={{ marginTop: "0rem" }}>General</h3>
     <li>Authentication and authorization</li>
     <li>Error handling</li>
     <li>Error boundaries</li>
     <li>Navigation</li>
     <li>Logging</li>
     <li>Servings calculator</li>
     <li>Schedule</li>
     <li>Version control</li>
     <li>Copy recipes to prod db</li>
     <h3>Recipes</h3>
     <li>
      Add{" "}
      <a
       href="https://github.com/m-chmielewski/common/blob/main/src/lib/Components/EllipsisButton.js"
       target="_blank"
       rel="noreferrer"
      >
       🔗EllipsisButton
      </a>{" "}
      with: search, add recipe
     </li>
     <li>Introduce categories</li>
     <h3>Recipe</h3>
     <li>
      Add{" "}
      <a
       href="https://github.com/m-chmielewski/common/blob/main/src/lib/Components/EllipsisButton.js"
       target="_blank"
       rel="noreferrer"
      >
       🔗EllipsisButton
      </a>{" "}
      with edit recipe
     </li>
     <li>
      Open AddToShoppingList without retrieving ingredients from backend again
     </li>
     <h3>Add recipe</h3>
     <li>Redesign desktop layout</li>
     <li>Tags</li>
     <li>Check if recipe name is already in use</li>
     <li>Create products that are not yet in db</li>
     <li>Scrolling to new row logic is sloppy</li>
     <li>DropdownsHandle logic is sloppy</li>
     <li>
      On submit scroll to top of the screen and focus on recipe name field
     </li>
    </ul>
   </div>
  </PageContent>
 );
};

export default Chefin;
