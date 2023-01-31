import { BrulureDiago, Dua, RoperHall } from "../../assets/constants";

export const pictures = [BrulureDiago, Dua, RoperHall];
export const Titles = [
  "Définition :",
  "Circonstance de survenue :",
  "Physiopathologie :",
  "Examen clinique :",
  "Signes de gravité:",
  "Classification de Roper-Hall",
  "Classification de Dua",
  "Traitement :",
  "Evolution :",
];

export const Def =
  "Les brûlures oculaires constituent l'un des plus graves traumatismes de l'appareil visuel.Diverses origines: les brûlures chimiques +++, thermiques ou par rayonnement (UV. IR) Le pronostic est en fonction de l’étendue de la surface oculaire lésée ; du degré de pénétration intraoculaire et de la rapidité de la PEC.";

export const CirconstanceDeSurvenue = [
  {
    mot: "Les accidents industriels :",
    defenition:
      "les brûlures sont souvent graves, car font intervenir des produits concentrés ou sont associées à d’autres lésions traumatiques (explosion).",
  },

  {
    mot: "Les accidents domestiques :",
    defenition:
      "sont souvent moins graves, car liés à des éclaboussures (ouvertures accidentelles d’une bouteille).",
  },

  {
    mot: "Les agressions :",
    defenition:
      "suite à des produits alcalins concentrés et donc potentiellement graves.",
  },
];

export const Physiopathologie = {
  paragraph1:
    "Les brûlures chimiques par acides usuels sont de gravité moyenne ; et elles peuvent être graves en milieu industriel avec l’emploi d’acides très concentrés.",
  paragraph2:
    "Les alcalins réagissent avec les acides gras (saponification), détruisant les membranes cellulaires ce qui leur permet de pénétrer très rapidement dans les tissus sous-jacents: le stroma, puis en chambre antérieure, avec possibilité d’atteinte du cristallin et corps ciliaires. Toutes les brûlures par bases concentrées sont potentiellement graves, même en milieu domestique (produits pour déboucher les siphons,…).",
  def: [
    {
      mot: "pH> 11,5 : ",
      defenition: "Lésions rapides et irréversibles.",
    },
    {
      mot: "Autres: ",
      defenition:
        "produits irritants ou corrosifs  : les solvants, les détergents, les lacrymogènes, les pesticides, certains latex.",
    },
  ],
};

export const ExamenClinique = [
  "La conjonctive : étendue et sévérité de la brûlure conjonctivale ; l’existence d’une ischémie voire une nécrose de la conjonctive bulbaire et/ou limbique, symblépharon .",
  "La cornée : étendue de l’atteinte cornéenne à l’aide de fluoréscéine ; sa profondeur et l’existence d’une opacification stromale. ",
  "Le tonus oculaire",
  "La chambre antérieure",
  "Le cristallin : sa clarté.",
];

export const SignesDeGravité = [
  "Œdème cornéen : aspect porcelainé à la cornée.",
  "Ischémie du limbe apparaissant anormalement blanc.",
  "Etendue sera évaluée en méridiens horaires et en pourcentage de la circonférence.",
  "Ischémie de la conjonctive qui présente des territoires dévascularisés blancs, oedémateux, dont on estimera l’étendue en pourcentage par rapport à la surface totale.",
  "Inflammation de la chambre antérieure, dont on cotera le degré.",
  "Hypertonie oculaire.",
  "Anesthésie cornéenne de très mauvais pronostic.",
];

export const Traitement = {
  mot: "Lavage oculaire :",
  defenition:
    "Sur les lieux de l’accident avec un liquide de lavage oculaire ou avec de l’eau, afin d’évacuer le plus de produit toxique.Renouvelé dés l’arrivée aux urgences:  Sous anesthésique de contact qui permet de réduire la douleur et le blépharospasme, réalisé avec un soluté iso- ou légèrement hyper-tonique, de type Ringer lactate, monté sur perfusion. L’eau est a éviter. Doux et prolongé, 1,5 l en 15 mn par œil, en éversant les paupières, en rinçant les culs de sac conjonctivaux, et en déplissant la conjonctive.Les particules solides doivent être recherchées activement et retirées à la pince : les particules de ciment, en particulier, sont adhérentes à la conjonctive et ont un effet réservoir.Si l’on dispose d’un papier pH, on peut vérifier le pH des larmes et poursuivre le lavage jusqu’à ce que le pH soit normalisé.",
};

export const Evolution = {
  paragraph:
    "L’évolution dépend essentiellement du degré de destruction du limbe, et de la capacité des cellules souches limbiques à renouveler l’épithélium cornéen :",
  dots: [
    "Ulcérations épithéliales cornéennes récidivantes ou chroniques .une conjonctivalisation de la cornée: opacification, néoVx.",
    "Symblépharons réduisant la mobilité oculaire, réalisant dans certains cas très graves, le classique « œil de statue » souvent associé à des paupières rétractées en entropion ou en ectropion.",
    "Sécheresse oculaire.",
    "Complications intra-oculaires : inflammation et hypertonie (glaucome).",
  ],
};
