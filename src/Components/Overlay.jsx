import React from "react";
import { allChapitres } from "../Constants/constants";
import { useDispatch } from "react-redux";
import { overlayAction } from "../store/OverlaySlice.js";

const Overlay = () => {
  const dispatch = useDispatch();
  return (
    <div className="fixed flex flex-col my-4 md:my-0 overflow-y-auto h-full md:h-fit md:flex-row md:space-x-12 p-8 shadow rounded-lg bg-background2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  z-50">
      {allChapitres.map((chapitre, i) => {
        return (
          <div key={i} className="flex flex-col items-center">
            <h1 className="text-2xl font-bold opacity-90 bg-accent1 my-6 px-6 py-3 rounded-lg cursor-pointer">
              {chapitre.chapitreTitle}
            </h1>
            <div className="flex flex-col items-center space-y-4">
              {chapitre.sections.map((section, j) => {
                return (
                  <a
                    onClick={() => dispatch(overlayAction.toggle())}
                    key={j}
                    className="text-primary1 hover:text-black duration-150 hover:opacity-70"
                    href={`#${section.split(" ")[0]}`}
                  >
                    {section}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Overlay;
