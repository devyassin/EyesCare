import React from "react";
import BrulureOculaire from "./Traumatologie/BrulureOculaire";
import { DomaineTitle } from "../../UI/index";

const Feed = () => {
  return (
    <div className="flex flex-col space-y-4">
      <DomaineTitle>Traumatologie</DomaineTitle>
      <BrulureOculaire />
    </div>
  );
};

export default Feed;
