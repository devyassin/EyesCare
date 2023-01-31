import React from "react";

const Paragraph = (props) => {
  return (
    <div className="text-center pb-10 pt-6 md:text-left max-w-4xl opacity-80 text-md md:text-lg">
      {props.children}
    </div>
  );
};

export default Paragraph;
