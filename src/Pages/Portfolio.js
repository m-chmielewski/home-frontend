import React from "react";

import PageContent from "../CommonElements/PageContent";
import Button from "../CommonElements/Button";

const Portfolio = () => {
 return (
  <PageContent className="portfolio">
   <h1>Portfolio</h1>
   <h2>MERN</h2>
   <Button href="/portfolio/chefin">Chefin</Button>
   <Button href="/portfolio/common">Common</Button>
   <Button href="/portfolio/shoppin">Shoppin</Button>
   <h2>Scripts</h2>
   <Button href="/portfolio/release/">release.sh</Button>
   <Button href="/portfolio/newproject/">newProject.sh</Button>
  </PageContent>
 );
};

export default Portfolio;
