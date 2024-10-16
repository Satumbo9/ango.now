import React from "react";
import Home from "./Home/page";
import Events from "./Events/page";
import Tourism from "./Tourism/page";
import TopCreator from "./TopCreator/page";
import { useRef, useState, useEffect } from "react";
import NavMenu from "@/components/ui/NavMenu";
const page = () => {
  return (
    <React.Fragment>
      <NavMenu />
      <Home />
      <Events />
      <Tourism />
      <TopCreator />
    </React.Fragment>
  );
};

export default page;
