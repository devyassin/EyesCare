import React from "react";

const Dot = ({ title }) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="h-[10px] w-[10px] mt-[6px] rounded-full bg-blue-500"></div>
      <div className="text-primary1 opacity-80 max-w-4xl">{title}</div>
    </div>
  );
};

export default Dot;
