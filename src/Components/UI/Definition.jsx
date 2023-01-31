import React from "react";

const Definition = ({ mot, defenition }) => {
  return (
    <div className="flex space-x-4 max-w-6xl text-sm md:text-lg">
      <p className=" font-semibold text-green-800 min-w-fit ">{mot}</p>
      <p className="  text-primary1 opacity-80">{defenition}</p>
    </div>
  );
};

export default Definition;
