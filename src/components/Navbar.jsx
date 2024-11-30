import React, { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // Dummy navigation data
  const navLinks = [
    { id: "Actualité", title: "Actualité" },
    { id: "servicespart", title: "Services particuliers" },
    { id: "servicescor", title: "Services corporate" },
    { id: "philately", title: "Philatélie" },
    { id: "avis", title: "Avis et Appels d'offres" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#efefef] flex justify-between items-center py-2 px-6">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-[64px] h-full" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex list-none justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-medium cursor-pointer text-[16px] ${
              index !== navLinks.length - 1 ? "mr-10" : ""
            }`}
          >
            <a
              href={`#${nav.id}`}
              className="text-black hover:text-blue-500 transition-colors"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center z-50">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* Mobile Navigation Links */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 w-[90%] rounded-xl shadow-lg`}
        >
          <ul className="list-none flex flex-col justify-center items-center w-full">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-normal cursor-pointer text-[16px] text-white mb-4 hover:text-yellow-300"
              >
                <a
                  href={`#${nav.id}`}
                  className="text-white"
                  onClick={() => setToggle(false)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
