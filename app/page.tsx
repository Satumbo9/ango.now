import React from "react";
import Home from "./Home/page";
import Events from "./Events/page";
import Tourism from "./Tourism/page";
import TopCreator from "./TopCreator/page";

const page = () => {
  return (
    <React.Fragment>
      <Home />
      <Events />
      <Tourism />
      <TopCreator />
    </React.Fragment>
  );
};

export default page;
