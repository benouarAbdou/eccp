import React from "react";
import { travlog, menu, close } from "../assets"; // Make sure the path is correct
import { navLinks } from "../constants";
import styles from "../styles";
import MainButton from "./MainButton";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`flex justify-between items-center navbar py-6 ${styles.paddingX} ${styles.flexCenter} `}
    >
      <img src={travlog} alt="Travlog" className="w-[124px] h-[32px]" />
      <div>
        <ul className="list-none md:flex  hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px]  ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden flex flex-1 justify-center items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer z-50"
          onPointerEnter={() => setToggle((prev) => !prev)}
        />

        {/* Mobile Navigation Links */}
        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black absolute top-20  mx-6 my-2 w-[95%] rounded-xl  z-20`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-0`}
            >
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <a href="#" className="font-poppins font-bold md:flex hidden">
          Login
        </a>
        <MainButton text={"Sign Up"} />
      </div>
    </nav>
  );
};

export default Navbar;
