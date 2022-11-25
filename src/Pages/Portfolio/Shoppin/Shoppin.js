import React from "react";

import { default as gh } from "../../../Icons/gh.svg";
import { default as homeScreen } from "./Screenshots/home.png";
import { default as composeScreen } from "./Screenshots/compose.png";
import { default as shopScreen } from "./Screenshots/shop.png";
import { default as addProductScreen } from "./Screenshots/addProduct.png";

import "../PortfolioItemPage.css";

import Button from "../../../CommonElements/Button";

import PageContent from "../../../CommonElements/PageContent";

const Shoppin = () => {
 return (
  <PageContent className="portfolio-item-page">
   <div className="heading-wrapper">
    <h1>Shoppin</h1>
    <Button
     href="https://shoppin.mchm.pl"
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
       href="https://github.com/m-chmielewski/shoppin-frontend"
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
       href="https://github.com/m-chmielewski/shoppin-backend"
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
     <li>PWA I use for household-related shopping</li>
     <li>Compose a shopping list</li>
     <li>
      Once in the store cross out items that have already been placed inside the
      cart
     </li>
     <li>Add a new product to the database</li>
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
     <li>Scroll bar styling</li>
     <li>Chrome mobile - 100vh issue</li>
     <h3>Compose</h3>
     <li>
      Get rid of two columns and use{" "}
      <a
       href="https://github.com/m-chmielewski/common/blob/main/src/lib/Components/SelectableCard.js"
       target="_blank"
       rel="noreferrer"
      >
       🔗SelectableCard
      </a>
     </li>
     <li>
      Add{" "}
      <a
       href="https://github.com/m-chmielewski/common/blob/main/src/lib/Components/EllipsisButton.js"
       target="_blank"
       rel="noreferrer"
      >
       🔗EllipsisButton
      </a>{" "}
      with: search, add product, expand/collapse all
     </li>
     <li>regular-vision-gap is hardcoded</li>
     <h3>Shop</h3>
     <li>
      Use{" "}
      <a
       href="https://github.com/m-chmielewski/common/blob/main/src/lib/Components/SelectableCard.js"
       target="_blank"
       rel="noreferrer"
      >
       🔗SelectableCard
      </a>
     </li>
     <li>
      Not all items have been crossed out - do u want to move them to the next
      list?
     </li>
     <li>Move to the end the categories from which all items are in cart</li>
     <li>
      Add{" "}
      <a
       href="https://github.com/m-chmielewski/common/blob/main/src/lib/Components/EllipsisButton.js"
       target="_blank"
       rel="noreferrer"
      >
       🔗EllipsisButton
      </a>{" "}
      with: search, list done, expand/collapse all
     </li>
     <h3>Add product</h3>
     <li>Redesign desktop layout</li>
     <li>Allow to add more rows instead of adding one by one</li>
     <li>
      Make name field{" "}
      <a
       href="https://github.com/m-chmielewski/common/blob/main/src/lib/Components/SuggestiveInput.js"
       target="_blank"
       rel="noreferrer"
      >
       🔗SuggestiveInput
      </a>{" "}
      - this will let check if product is already in db
     </li>
    </ul>
   </div>
  </PageContent>
 );
};

export default Shoppin;
