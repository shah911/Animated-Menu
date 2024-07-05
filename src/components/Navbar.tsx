import React from "react";
import Menu from "./Menu";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex items-center justify-between mx-auto w-[85%] md:w-[90%] py-6 2xl:py-[2vw]">
      <Link
        href="/"
        className="z-20 font-medium tracking-tighter text-3xl 2xl:text-[2.25vw]"
      >
        Shah.
      </Link>
      <Menu />
    </div>
  );
}

export default Navbar;
