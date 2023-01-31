import React from "react";

const DomaineTitle = (props) => {
  return (
    <div className="flex flex-col space-y-4 items-center">
      <div className="text-5xl md:text-6xl text-center  font-bold text-accent1">
        {props.children}
      </div>
      <div className="bgButton px-10 py-2 rounded-2xl"></div>
    </div>
  );
};

export default DomaineTitle;
