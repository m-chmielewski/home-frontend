import React from "react";

import { default as gh } from "../../Icons/gh.svg";

import "./PortfolioItemPage.css";

import PageContent from "../../CommonElements/PageContent";

const Common = () => {
 return (
  <PageContent className="portfolio-item-page">
   <div
    className="heading-wrapper"
    style={{ justifyContent: "flex-start", gap: "2rem" }}
   >
    <h1>Common</h1>
    <a
     href="https://github.com/m-chmielewski/common"
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
    <div>React</div>
    <div>npm</div>
   </div>
   <div>
    <h2>Features</h2>
    <ul>
     <li>npm package that I use across my apps</li>
     <li>React components</li>
     <li>Custom hooks</li>
     <li>Utility functions</li>
    </ul>
   </div>
   <div>
    <h2>ToDo</h2>
    <ul>
     <h3 style={{ marginTop: "0rem" }}>General</h3>
     <li>
      <a
       href="https://jsdoc.app"
       target="_blank"
       rel="noreferrer"
      >
       🔗JSDoc
      </a>
     </li>
     <li>Error handling</li>
     <li>Axios downgraded to 1.0.0 - check in some time if problem is fixed</li>
     <li>Create a component that will simplify forms implementation</li>
     <li>Improve exports</li>
     <li>OnHover works poorly on mobile</li>
     <li>Scroll bar styling</li>
     <h3>useFormData</h3>
     <li>useReducer</li>
     <h3>useFormState</h3>
     <li>Validation on blur</li>
     <h3>useRegularVision</h3>
     <li>useContext</li>
     <h3>CategoryWrapper</h3>
     <li>Expand on enter</li>
     <h3>PageContent</h3>
     <li>Chrome mobile - 100vh issue</li>
     <h3>SuggestiveInput</h3>
     <li>
      If I am only tabbing without pressing enter or clicking anywhere lists
      don’t disappear after reaching lists end
     </li>
     <li>Use backdrop</li>
     <h3>SubmitSection</h3>
     <li>Replace form alert with some modal appearing as floating element</li>
    </ul>
   </div>
  </PageContent>
 );
};

export default Common;
