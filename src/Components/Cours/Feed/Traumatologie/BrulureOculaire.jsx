import React from "react";
import {
  pictures,
  Titles,
  Def,
  CirconstanceDeSurvenue,
  Physiopathologie,
  ExamenClinique,
  SignesDeGravité,
  Traitement,
  Evolution,
} from "../../../../Constants/Traumatologie/BrulureOculaire";

import {
  ChapitreTitle,
  Definition,
  DefinitionsContainer,
  Dot,
  Dots,
  Paragraph,
  SmallTitle,
  Picture,
} from "../../../UI/index";

const BrulureOculaire = () => {
  return (
    <div className="flex flex-col space-y-4">
      <ChapitreTitle>Brulure Oculaire</ChapitreTitle>
      <SmallTitle>{Titles[0]}</SmallTitle>
      <Paragraph>{Def}</Paragraph>
      <SmallTitle>{Titles[1]}</SmallTitle>
      <DefinitionsContainer Definitions={CirconstanceDeSurvenue} />
      <SmallTitle>{Titles[2]}</SmallTitle>
      <Paragraph>{Physiopathologie.paragraph1}</Paragraph>
      <Paragraph>{Physiopathologie.paragraph2}</Paragraph>
      <DefinitionsContainer Definitions={Physiopathologie.def} />
      <SmallTitle>{Titles[3]}</SmallTitle>
      <Dots Dots={ExamenClinique} />
      <SmallTitle>{Titles[4]}</SmallTitle>
      <Dots Dots={SignesDeGravité} />
      <SmallTitle>{Titles[5]}</SmallTitle>
      <Picture picture={pictures[2]} />
      <SmallTitle>{Titles[6]}</SmallTitle>
      <Picture picture={pictures[1]} />
      <SmallTitle>{Titles[7]}</SmallTitle>
      <Definition mot={Traitement.mot} defenition={Traitement.defenition} />
      <Picture picture={pictures[0]} />
      <SmallTitle>{Titles[8]}</SmallTitle>
      <Paragraph>{Evolution.paragraph}</Paragraph>
      <Dots Dots={Evolution.dots} />
    </div>
  );
};

export default BrulureOculaire;
