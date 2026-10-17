import { Question } from "../types";

export const purificationQuestions: Question[] = [
  {
    id: 56,
    question: "Which distillation technique is most suitable for separating a mixture of two volatile liquids whose boiling points differ significantly (by more than 40°C)?",
    options: [
      "Simple distillation",
      "Fractional distillation",
      "Steam distillation",
      "Vacuum distillation"
    ],
    answerIndex: 0,
    explanation: "Simple distillation is highly effective for separating liquids with widely different boiling points (typically a difference of 40°C to 50°C or more), or for separating a volatile liquid from non-volatile solids."
  },
  {
    id: 57,
    question: "What is the primary function of a fractionating column in fractional distillation?",
    options: [
      "To increase the pressure inside the boiling flask",
      "To provide a large surface area for repeated cycles of condensation and vaporization, ensuring better separation of liquids with close boiling points",
      "To introduce steam into the liquid mixture",
      "To absorb water vapor from the system"
    ],
    answerIndex: 1,
    explanation: "A fractionating column (packed with glass beads or a vigreux column) provides a large cold surface area that allows ascending vapors to condense and descending liquids to vaporize repeatedly, effectively conducting multiple micro-distillations in a single run."
  },
  {
    id: 58,
    question: "Which purification method is ideal for isolating steam-volatile, water-insoluble organic liquids (like aniline, nitrobenzene, or essential oils) from non-volatile impurities?",
    options: [
      "Vacuum distillation",
      "Steam distillation",
      "Fractional crystallization",
      "Sublimation"
    ],
    answerIndex: 1,
    explanation: "Steam distillation allows water-insoluble, steam-volatile organic compounds to distill at temperatures well below their actual boiling points (below 100°C), avoiding thermal decomposition."
  },
  {
    id: 59,
    question: "For a liquid organic compound that decomposes at or below its normal boiling point, which distillation method should be selected to purify it safely?",
    options: [
      "Steam distillation",
      "Simple distillation at high pressure",
      "Vacuum distillation (distillation under reduced pressure)",
      "Azeotropic distillation"
    ],
    answerIndex: 2,
    explanation: "By reducing the external pressure using a vacuum pump, the boiling point of a liquid is significantly lowered. This allows the liquid to distill at a lower temperature, preventing heat-sensitive compounds (like glycerol) from decomposing."
  },
  {
    id: 60,
    question: "What is the underlying chemical principle behind purification by recrystallization (crystallization)?",
    options: [
      "Differences in boiling points of the solutes in a hot solvent",
      "Differences in solubilities of the organic compound and its impurities in a suitable solvent at hot and cold temperatures",
      "The rate of sublimation of the compound in vacuum",
      "The density of the solid crystals compared to the liquid solvent"
    ],
    answerIndex: 1,
    explanation: "Recrystallization relies on the compound of interest being highly soluble in a solvent at elevated temperatures (near boiling point) but sparingly soluble at low temperatures (room temperature or in an ice bath), while impurities remain dissolved in the cold solvent."
  },
  {
    id: 61,
    question: "Which of the following organic substances can be easily purified by Sublimation at atmospheric pressure?",
    options: [
      "Aniline",
      "Glycerol",
      "Camphor, benzoic acid, or naphthalene",
      "Diethyl ether"
    ],
    answerIndex: 2,
    explanation: "Sublimation is a process where a solid directly converts to vapor upon heating without melting into a liquid. Solid organic compounds like camphor, benzoic acid, naphthalene, and anthracene sublime readily and can be separated from non-sublimable impurities."
  },
  {
    id: 62,
    question: "In chromatography, what is the fundamental process that separates the components of a mixture?",
    options: [
      "Differential partitioning and rate of migration of components between a stationary phase and a mobile phase",
      "Chemical reaction with the silica gel adsorbent",
      "Fractional boiling inside a capillary tube",
      "Differences in the molecular weights of the compounds"
    ],
    answerIndex: 0,
    explanation: "Chromatography separates mixtures based on how differently each component partitions (adsorbs or dissolves) between a stationary phase (solid or supported liquid) and a mobile phase (fluid solvent or gas)."
  },
  {
    id: 63,
    question: "In Paper Chromatography, what is the actual stationary phase?",
    options: [
      "The dry cellulose paper fibers",
      "Water molecules bound/absorbed on the cellulose paper fibers",
      "The organic solvent running up the paper",
      "The pencil line drawn at the base"
    ],
    answerIndex: 1,
    explanation: "In paper chromatography, the stationary phase is not the paper itself, but the water molecules adsorbed or bound within the cellulose fibers of the paper. The mobile phase is an organic solvent."
  },
  {
    id: 64,
    question: "What is the adsorbent stationary phase most commonly coated onto glass or plastic plates in Thin-Layer Chromatography (TLC)?",
    options: [
      "Sodium chloride",
      "Cellulose powder",
      "Silica gel or Alumina",
      "Anhydrous calcium sulfate"
    ],
    answerIndex: 2,
    explanation: "TLC plates are typically prepared by coating a thin, uniform layer of an active adsorbent like silica gel (SiO₂) or alumina (Al₂O₃) onto a glass, aluminum, or plastic support sheet."
  },
  {
    id: 65,
    question: "How is the Retardation Factor (Rf) value calculated in planar chromatography?",
    options: [
      "Rf = Distance traveled by solvent / Distance traveled by solute",
      "Rf = Distance traveled by solute / Distance traveled by solvent front",
      "Rf = Weight of recovered crystals / Initial weight of mixture",
      "Rf = Boiling point of solute - Boiling point of solvent"
    ],
    answerIndex: 1,
    explanation: "The Rf value is a ratio defined as: (Distance traveled by the substance from the baseline) divided by (Distance traveled by the solvent front from the baseline). It is always less than or equal to 1.0."
  },
  {
    id: 66,
    question: "When performing solvent extraction in a separating funnel, which phase-distribution law dictates the equilibrium concentrations of the solute in the two immiscible solvents?",
    options: [
      "Henry's Gas Law",
      "Nernst Distribution (Partition) Law",
      "Raoult's Law of Vapor Pressure",
      "Hess's Law of Heat Summation"
    ],
    answerIndex: 1,
    explanation: "The Nernst Distribution Law states that at a constant temperature, a solute distributes itself between two immiscible solvents in a constant concentration ratio (Partition Coefficient, Kd = C₁ / C₂)."
  },
  {
    id: 67,
    question: "In solvent extraction, which of the following approaches is mathematically and practically more efficient for extracting a solute from an aqueous solution?",
    options: [
      "A single extraction using the entire volume (e.g., 100 mL) of the organic solvent",
      "Multiple successive extractions using smaller portions (e.g., four 25 mL portions) of the organic solvent",
      "Boiling the aqueous solution to dryness first, then washing the residue",
      "Adding a strong acid to precipitate the organic solvent"
    ],
    answerIndex: 1,
    explanation: "Based on the partition coefficient equation, performing multiple extractions with smaller portions of solvent recovers significantly more solute than a single large-volume extraction with the same total amount of solvent."
  },
  {
    id: 68,
    question: "Which of the following anhydrous salts is commonly used as a chemical 'drying agent' (desiccant) to remove traces of water from a wet organic layer after solvent extraction?",
    options: [
      "Anhydrous Magnesium Sulfate (MgSO₄) or Calcium Chloride (CaCl₂)",
      "Sodium hydroxide (NaOH)",
      "Sodium chloride (NaCl)",
      "Copper(II) sulfate pentahydrate"
    ],
    answerIndex: 0,
    explanation: "Anhydrous salts like MgSO₄, CaCl₂, or Na₂SO₄ readily bind water molecules to form solid hydrates, allowing them to absorb water dissolved in organic solutions. They are then filtered off."
  },
  {
    id: 69,
    question: "During crystallization, why is a small amount of activated charcoal added to the hot organic solution before filtration?",
    options: [
      "To act as a catalyst to accelerate crystal growth",
      "To adsorb colored, polymeric, or resinous impurities from the solution",
      "To lower the melting point of the compound",
      "To change the pH of the solvent"
    ],
    answerIndex: 1,
    explanation: "Activated charcoal has an extremely high surface area and selectively adsorbs highly colored, high-molecular-weight impurities and resins. It is filtered out while hot along with the adsorbed impurities."
  },
  {
    id: 70,
    question: "What physical property is the most reliable, simple laboratory indicator of the purity of a solid organic compound?",
    options: [
      "Its density and color",
      "Its solubility in water at room temperature",
      "Its melting point (a pure compound melts sharply at a specific temperature, whereas impurities lower and broaden the melting range)",
      "Its rate of evaporation"
    ],
    answerIndex: 2,
    explanation: "Pure solid organic substances have sharp and characteristic melting points (within a range of 0.5°C to 1°C). The presence of impurities disrupts the crystal lattice, which lowers the melting point and widens the temperature range over which it melts."
  }
];
