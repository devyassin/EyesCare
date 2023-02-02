import React from "react";
import { Dot } from "./index.js";

const Dots = ({ Dots }) => {
  return (
    <div className="flex py-6 flex-col space-y-6">
      {Dots.map((dot,i) => {
        return <Dot key={i} title={dot} />;
      })}
    </div>
  );
};

export default Dots;
