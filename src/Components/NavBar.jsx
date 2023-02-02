import React from "react";
import { Link } from "react-router-dom";
import { EyeCare, close, menu, LogoDarkmode } from "../assets/index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { overlayAction } from "../store/OverlaySlice.js";

import MobileNavigation from "./MobileNavigation";

const NavBar = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);

  const toggleChapitres = () => {
    dispatch(overlayAction.toggle());
  };

  return (
    <div className="container relative  flex py-4 px-6 md:px-0 mx-auto  justify-between items-center">
      {/* Logo */}
      <Link to="/Cours">
        <div className="flex z-20 items-center space-x-2 hover:cursor-pointer">
          <img
            className="w-14"
            src={toggle ? EyeCare : LogoDarkmode}
            alt="logo"
          />
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-LogoGreen">Eye</h1>
            <h1 className="text-2xl font-bold text-LogoDarkGreen">Care</h1>
          </div>
        </div>
      </Link>
      {/* Routes */}
      <div className="hidden md:flex space-x-16 text-xl text-primary1">
        <Link to="/Cours">
          <a
            className="opacity-80 hover:opacity-100 duration-150"
            href="#Cours"
          >
            Cours
          </a>
        </Link>
        <Link to="Doctors">
          <a
            className="opacity-80 hover:opacity-100 duration-150"
            href="#Doctors"
          >
            Doctors
          </a>
        </Link>
        <Link to="/About">
          <a
            className="opacity-80 hover:opacity-100 duration-150"
            href="#About"
          >
            About
          </a>
        </Link>
      </div>
      {/* Button */}
      <button
        onClick={toggleChapitres}
        className="hidden md:flex bgButton px-6 py-3 rounded-2xl hover:cursor-pointer hover:opacity-100 duration-150 text-lg text-primary1 opacity-80"
      >
        Voir les chapitres
      </button>

      {/* Mobile Navigation */}
      <img
        className="flex z-20 md:hidden cursor-pointer w-8"
        src={toggle ? menu : close}
        alt="mobileLogo"
        onClick={() => setToggle((prev) => !prev)}
      />

      {!toggle && <MobileNavigation />}
    </div>
  );
};

export default NavBar;
