import React from "react";

const MobileNavigation = () => {
  return (
    <div className="absolute bg-black min-h-screen top-0 bottom-0 left-0 right-0 md:hidden">
      {/* Mobile Menu */}
      <div className="flex flex-col items-center text-primary1 font-semibold  space-y-10">
        <div className="flex flex-col mt-44 space-y-2 text-lg items-center">
          <a
            className="uppercase hover:text-accent1 duration-150 border-b-2 px-44 py-4"
            href="#Cours"
          >
            Cours
          </a>
          <a
            className="uppercase hover:text-accent1 duration-150 border-b-2 px-44 py-4"
            href="#Doctors"
          >
            Doctors
          </a>
          <a
            className="uppercase hover:text-accent1 duration-150 border-b-2 px-44 py-4"
            href="#About"
          >
            About
          </a>
        </div>
        <button className="px-6  py-3 rounded-2xl bg-button hover:opacity-80 duration-150">
          Voir les chapitres
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;
