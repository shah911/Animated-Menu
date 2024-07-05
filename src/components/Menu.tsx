"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SideBarMenu from "./SideBarMenu";

const main = {
  initial: {
    clipPath: "inset(0 0 100% 0)",
  },
  animate: {
    clipPath: "inset(0)",
    transition: {
      type: "tween",
      duration: 0.75,
      ease: [0.45, 0, 0.55, 1],
    },
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    transition: {
      type: "tween",
      delay: 0.25,
      duration: 0.75,
      ease: [0.45, 0, 0.55, 1],
    },
  },
};

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <label
          className="burger z-20"
          htmlFor="burger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <input
            type="checkbox"
            id="burger"
            checked={isOpen}
            readOnly
            onClick={handleHamburgerClick}
          />
          <span></span>
          <span></span>
        </label>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={main}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-orange-500 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[97.5%] w-[95%] h-[97.5vh] rounded-xl"
          >
            <SideBarMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;
