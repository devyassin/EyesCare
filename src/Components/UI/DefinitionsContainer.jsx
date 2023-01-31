import React from "react";
import { Definition } from "./index.js";

const DefinitionsContainer = ({ Definitions }) => {
  return (
    <div className="flex py-6 flex-col space-y-6">
      {Definitions.map((Def) => {
        return (
          <Definition key={Def.mot} mot={Def.mot} defenition={Def.defenition} />
        );
      })}
    </div>
  );
};

export default DefinitionsContainer;
