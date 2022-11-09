import React from "react";

import PageContent from "../CommonElements/PageContent";
import Button from "../CommonElements/Button";

const Portfolio = () => {
 return (
  <PageContent className="portfolio">
   <h1>Portfolio</h1>
   <h2>Apps</h2>
   <Button href="https://shoppin.mchm.pl">Shoppin</Button>
   <h2>Scripts</h2>
   <Button href="/portfolio/release/">release.sh</Button>
   <Button href="/portfolio/newproject/">newProject.sh</Button>
  </PageContent>
 );
};

export default Portfolio;
