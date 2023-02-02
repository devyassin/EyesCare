import React from "react";
import { useDispatch } from "react-redux";
import { overlayAction } from "../store/OverlaySlice.js";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
  const dispatch = useDispatch();
  return (
    <div className="absolute z-10 bg-black min-h-screen top-0 bottom-0 left-0 right-0 md:hidden">
      {/* Mobile Menu */}
      <div className="flex flex-col items-center text-primary1 font-semibold  space-y-10">
        <div className="flex flex-col mt-44 space-y-2 text-lg items-center">
          <Link
            className="uppercase hover:text-accent1 duration-150 border-b-2 px-44 py-4"
            to="/Cours"
          >
            Cours
          </Link>
          <Link
            className="uppercase hover:text-accent1 duration-150 border-b-2 px-44 py-4"
            to="/Doctors"
          >
            Doctors
          </Link>
          <Link
            className="uppercase hover:text-accent1 duration-150 border-b-2 px-44 py-4"
            to="/About"
          >
            About
          </Link>
        </div>
        <button
          onClick={() => {
            dispatch(overlayAction.toggle());
          }}
          className="px-6  py-3 rounded-2xl bg-button hover:opacity-80 duration-150"
        >
          Voir les chapitres
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;
