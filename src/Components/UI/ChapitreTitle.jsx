import React from "react";

const ChapitreTitle = (props) => {
  return (
    <div className="text-center py-20 md:text-left text-4xl font-bold text-gradient">
      {props.children}
    </div>
  );
};

export default ChapitreTitle;
