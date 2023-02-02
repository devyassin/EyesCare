import React from "react";

const Introduction = () => {
  return (
    <div className="container mx-auto px-6 flex flex-col space-y-8 text-center md:text-left lg:px-0  md:items-start items-center mt-28 mb-20">
      <h1 className="text-gradient font-bold text-4xl max-w-md md:text-6xl md:max-w-3xl mb-4">
        Welcome To <br className="hidden md:block" />
        EyesCare Website
      </h1>
      <p className="text-primary1 text-md max-w-md md:text-2xl md:max-w-3xl font-thin opacity-50">
        EyesCare est une source fiable d'informations actualisées dans le
        domaine de l'ophtalmologie. Notre objectif est de fournir aux médecins
        une plateforme complète et accessible pour se tenir informés des
        derniers développements, traitements et meilleures pratiques du secteur
        d'ophtalmologie.
      </p>

      <a
        href="#"
        download
        className="text-primary1 px-10 py-4 rounded-full md:text-2xl hover:opacity-80 duration-150 bgButton"
      >
        Download App
      </a>
    </div>
  );
};

export default Introduction;
