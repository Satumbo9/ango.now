"use client";

import React from "react";
import { menuLinks } from "../data/menuLinks";
import Link from "next/link";
import { useState, useRef } from "react";
import Homepage from "@/app/Home/page";

export const SubMenu = () => {
  //   const [menuSelected, setMenuSelected] = useState<string | null>(null);
  return (
    <nav className="h-[100px] flex  flex-col gap-10 justify-center items-center bg-green-500">
      <div className="flex gap-10">
        {menuLinks.map((items) => {
          return <Link href={items.route}>{items.text}</Link>;
        })}
      </div>
    </nav>
  );
};

export default SubMenu;
