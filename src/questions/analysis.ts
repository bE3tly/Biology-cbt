import { Question } from "../types";

export const analysisQuestions: Question[] = [
  {
    id: 71,
    question: "What is the primary purpose of heating an organic compound with metallic sodium in Lassaigne's test (Sodium Fusion Test)?",
    options: [
      "To oxidize carbon and hydrogen to carbon dioxide and water",
      "To convert covalently bound elements (N, S, Halogens) in the organic compound into water-soluble ionic sodium salts",
      "To precipitate all carbon atoms as sodium carbide",
      "To determine the boiling point of the compound"
    ],
    answerIndex: 1,
    explanation: "Covalent bonds in organic compounds make elements like N, S, and X unreactive to standard ionic tests. Fusing the compound with molten sodium converts them into water-soluble inorganic ionic salts: NaCN, Na₂S, and NaX."
  },
  {
    id: 72,
    question: "In Lassaigne's test for Nitrogen, which chemical species is responsible for the characteristic Prussian Blue precipitate/coloration, confirming nitrogen's presence?",
    options: [
      "Sodium ferrocyanide, Na₄[Fe(CN)₆]",
      "Iron(III) hexacyanoferrate(II), Fe₄[Fe(CN)₆]₃",
      "Sodium nitroprusside, Na₂[Fe(CN)₅NO]",
      "Iron(III) thiocyanate, [Fe(SCN)]²⁺"
    ],
    answerIndex: 1,
    explanation: "During nitrogen detection, sodium cyanide reacts with iron(II) sulfate to form sodium ferrocyanide, which then reacts with iron(III) ions (formed by oxidation/added) in acid to form the insoluble Prussian Blue complex: Fe₄[Fe(CN)₆]₃."
  },
  {
    id: 73,
    question: "Which reagent is added to Lassaigne's filtrate to yield a brilliant purple/violet solution, confirming the presence of Sulfur?",
    options: [
      "Silver nitrate, AgNO₃",
      "Sodium nitroprusside, Na₂[Fe(CN)₅(NO)]",
      "Iron(III) chloride, FeCl₃",
      "Barium chloride, BaCl₂"
    ],
    answerIndex: 1,
    explanation: "If sulfur is present, the filtrate contains sodium sulfide (Na₂S). Adding sodium nitroprusside reacts with sulfide ions to form a highly characteristic violet/purple complex: Na₄[Fe(CN)₅(NOS)]."
  },
  {
    id: 74,
    question: "How is Lassaigne's filtrate treated to detect Halogens (Cl, Br, I)?",
    options: [
      "Acidified with dilute HNO₃, boiled (to expel HCN and H₂S if present), then treated with AgNO₃ solution",
      "Treated with sodium nitroprusside and acetic acid",
      "Treated with copper wire in a Bunsen flame",
      "Acidified with HCl and treated with BaCl₂"
    ],
    answerIndex: 0,
    explanation: "Boiling with HNO₃ is essential to destroy any cyanide (HCN) and sulfide (H₂S) gas which would otherwise interfere by precipitating as silver cyanide or silver sulfide. Then, AgNO₃ is added to precipitate silver halides (AgX)."
  },
  {
    id: 75,
    question: "What are the observed precipitates and their solubilities in ammonium hydroxide when detecting Chlorine, Bromine, and Iodine using Lassaigne's silver nitrate test?",
    options: [
      "All form black precipitates which are insoluble in ammonium hydroxide",
      "Chlorine: white ppt (soluble in NH₄OH); Bromine: pale yellow ppt (sparingly soluble); Iodine: yellow ppt (insoluble)",
      "Chlorine: yellow ppt (insoluble); Bromine: white ppt (soluble); Iodine: red ppt (soluble)",
      "They form no precipitates, only gaseous bubbles"
    ],
    answerIndex: 1,
    explanation: "AgCl is a white precipitate that dissolves easily in NH₄OH; AgBr is pale yellow and sparingly soluble; AgI is a distinct yellow precipitate that is completely insoluble in NH₄OH."
  },
  {
    id: 76,
    question: "If an organic compound contains both Nitrogen and Sulfur, what species is formed during sodium fusion, and what observation occurs upon adding FeCl₃ in acidic medium?",
    options: [
      "Sodium cyanide and sodium sulfide are formed, giving a Prussian blue precipitate",
      "Sodium thiocyanate (NaSCN) is formed, giving a blood-red coloration with Fe³⁺ ions",
      "Sodium sulfate is formed, giving a white precipitate",
      "Sodium nitride is formed, giving an orange precipitate"
    ],
    answerIndex: 1,
    explanation: "When both N and S are present, sodium fusion yields sodium thiocyanate (NaSCN). This reacts with iron(III) ions to form the blood-red iron(III) thiocyanate complex, [Fe(SCN)]²⁺ (no Prussian blue is formed unless there is excess sodium to break down NaSCN into NaCN and Na₂S)."
  },
  {
    id: 77,
    question: "In Liebig's combustion method for estimating Carbon and Hydrogen, how are the combustion products CO₂ and H₂O quantitatively captured and weighed?",
    options: [
      "CO₂ is captured in water, and H₂O is boiled off",
      "H₂O is absorbed in a U-tube containing anhydrous Calcium Chloride (CaCl₂), and CO₂ is absorbed in a bulb containing Potassium Hydroxide (KOH) solution",
      "Both are absorbed in concentrated sulfuric acid",
      "They are collected in a gas syringe and measured by volume"
    ],
    answerIndex: 1,
    explanation: "Anhydrous CaCl₂ absorbs water quantitatively (enabling calculation of hydrogen content from mass increase). KOH absorbs CO₂ quantitatively (enabling calculation of carbon content from mass increase)."
  },
  {
    id: 78,
    question: "Which quantitative method involves heating an organic compound with copper oxide (CuO) in an atmosphere of pure CO₂ and measuring the volume of nitrogen gas evolved in a nitrometer?",
    options: [
      "Kjeldahl's method",
      "Dumas method",
      "Carius method",
      "Victor Meyer method"
    ],
    answerIndex: 1,
    explanation: "The Dumas method is a classical, universal quantitative technique for nitrogen estimation. Nitrogen-containing organic compounds are combusted to produce N₂ gas, which is collected and measured over aqueous KOH (which absorbs the CO₂ carrier gas)."
  },
  {
    id: 79,
    question: "What are the chemical stages involved in estimating nitrogen using Kjeldahl's Method?",
    options: [
      "Heating the compound with sodium metal, followed by silver nitrate precipitation",
      "Digestion of the compound with concentrated sulfuric acid (to convert organic nitrogen to ammonium sulfate), distillation with excess sodium hydroxide (to release ammonia gas), absorption of ammonia in excess standard acid, and titration",
      "Reduction with hydrogen gas, followed by gas chromatography",
      "Oxidation to nitrate ions, followed by spectrophotometry"
    ],
    answerIndex: 1,
    explanation: "Kjeldahl's method involves: 1) Digestion with conc. H₂SO₄ (yielding (NH₄)₂SO₄); 2) Neutralization with NaOH to distill NH₃; 3) Trapping NH₃ in standard acid (HCl or H₃BO₃); 4) Volumetric titration to calculate nitrogen percentage."
  },
  {
    id: 80,
    question: "Why is Kjeldahl's method NOT applicable to organic compounds containing nitro (-NO₂) groups, azo (-N=N-) groups, or nitrogen atoms inside a ring (like pyridine)?",
    options: [
      "Because these compounds are too volatile to be heated",
      "Because the nitrogen in these structures cannot be quantitatively converted into ammonium sulfate under standard digestion conditions",
      "Because they react violently with sulfuric acid and explode",
      "Because their nitrogen atoms evaporate as dinitrogen tetroxide"
    ],
    answerIndex: 1,
    explanation: "Kjeldahl's digestion depends on sulfuric acid reducing organic nitrogen to ammonium ions. Nitrogen in nitro groups, azo groups, and heterocyclic rings (pyridine, quinoline) is in oxidation states or stable aromatic rings that resist conversion to ammonium sulfate without specialized reducing pre-treatments."
  },
  {
    id: 81,
    question: "What are the reaction conditions for estimating halogens quantitatively using the Carius Method?",
    options: [
      "Heating the compound with copper wire in a chlorine stream",
      "Heating the compound with fuming nitric acid (HNO₃) in the presence of silver nitrate (AgNO₃) inside a sealed hard-glass tube (Carius tube)",
      "Electrolysis of the compound in sodium hydroxide solution",
      "Titration of the compound directly with sodium thiosulfate"
    ],
    answerIndex: 1,
    explanation: "In the Carius method, organic matter is oxidized by fuming nitric acid at high temperature. Carbon and hydrogen are oxidized to gases, while halogens react with the added AgNO₃ to form solid silver halides (AgX) which are filtered, washed, dried, and weighed."
  },
  {
    id: 82,
    question: "In the quantitative estimation of Sulfur using the Carius method, what solid compound is precipitated and weighed to calculate sulfur percentage?",
    options: [
      "Silver sulfide, Ag₂S",
      "Sodium sulfate, Na₂SO₄",
      "Barium sulfate, BaSO₄",
      "Sulfur dioxide, SO₂"
    ],
    answerIndex: 2,
    explanation: "Fuming HNO₃ oxidizes organic sulfur into sulfuric acid (H₂SO₄). Adding barium chloride (BaCl₂) precipitates insoluble barium sulfate (BaSO₄). The mass of dry BaSO₄ is measured to determine the amount of sulfur."
  },
  {
    id: 83,
    question: "What is the definition of an Empirical Formula of a compound?",
    options: [
      "The formula showing the exact total number of atoms of each element in a molecule",
      "The simplest whole-number ratio of atoms of each element present in a compound",
      "A graphical representation showing all covalent bonds",
      "The physical state of the compound at standard temperature and pressure"
    ],
    answerIndex: 1,
    explanation: "The empirical formula is the simplest formula showing the relative numbers of each kind of atom in a compound in a simple whole-number ratio."
  },
  {
    id: 84,
    question: "An organic compound is analyzed and found to contain 40.0% Carbon, 6.7% Hydrogen, and 53.3% Oxygen by mass. What is its empirical formula? (Atomic weights: C = 12, H = 1, O = 16)",
    options: [
      "CHO",
      "CH₂O",
      "CHO₂",
      "C₂H₄O"
    ],
    answerIndex: 1,
    explanation: "Divide percentages by atomic weights: C = 40.0/12 = 3.33; H = 6.7/1 = 6.70; O = 53.3/16 = 3.33. Dividing each by 3.33 (the smallest) yields: C = 1, H = 2, O = 1, which gives the empirical formula CH₂O."
  },
  {
    id: 85,
    question: "How is the Molecular Formula of an organic compound determined from its Empirical Formula?",
    options: [
      "By doubling the empirical formula's hydrogen atoms",
      "By multiplying the subscripts in the empirical formula by an integer 'n', where n = Molecular Weight / Empirical Formula Weight",
      "By dividing the empirical formula subscripts by the number of carbon atoms",
      "The molecular formula is always identical to the empirical formula"
    ],
    answerIndex: 1,
    explanation: "Molecular formula = (Empirical formula)n, where 'n' is a whole-number integer equal to the molecular weight of the compound divided by the formula mass of its empirical formula."
  },
  {
    id: 86,
    question: "An organic compound has an empirical formula of CH₂ and a molecular weight of 56 g/mol. What is its molecular formula? (Atomic weights: C = 12, H = 1)",
    options: [
      "C₂H₄",
      "C₃H₆",
      "C₄H₈",
      "C₅H₁₀"
    ],
    answerIndex: 2,
    explanation: "Empirical formula mass (CH₂) = 12 + (2 × 1) = 14. Find 'n': n = 56 / 14 = 4. Multiplying the empirical formula CH₂ by 4 gives the molecular formula C₄H₈ (butene)."
  },
  {
    id: 87,
    question: "Which classical laboratory method is used to determine the molecular weight of volatile organic compounds by measuring the volume of air displaced by a vaporized sample?",
    options: [
      "Kjeldahl's method",
      "Victor Meyer's method",
      "Lassaigne's method",
      "Dumas method"
    ],
    answerIndex: 1,
    explanation: "Victor Meyer's method vaporizes a known mass of a volatile liquid inside a heated tube, displacing an equal volume of air which is collected and measured. From this gas volume at STP, the vapor density and molecular weight (MW = 2 × vapor density) are calculated."
  },
  {
    id: 88,
    question: "In organic elemental analysis, how is the mass percentage of Oxygen typically determined if it is present?",
    options: [
      "By precipitating oxygen as solid silver oxide",
      "By subtracting the sum of the percentages of all other detected elements (C, H, N, S, Halogens, etc.) from 100%",
      "By measuring the volume of ozone released upon heating",
      "Oxygen cannot be determined and is ignored"
    ],
    answerIndex: 1,
    explanation: "Direct estimation of oxygen is difficult. In standard elemental analysis, the percentage of oxygen is calculated indirectly by subtracting the total percentages of all other elements (C, H, N, S, halogens) from 100%."
  },
  {
    id: 89,
    question: "What is the role of Copper Oxide (CuO) in the combustion tube during Liebig's elemental analysis?",
    options: [
      "To act as an inert drying agent to absorb water",
      "To act as an oxidizing agent, ensuring that any carbon or hydrogen that did not burn completely is converted to CO₂ and H₂O",
      "To react with sulfur and nitrogen to prevent gas formation",
      "To lower the melting point of the glass tube"
    ],
    answerIndex: 1,
    explanation: "CuO acts as a source of oxygen at high temperatures (an oxidizing catalyst), ensuring complete oxidation of carbon and hydrogen to CO₂ and H₂O."
  },
  {
    id: 90,
    question: "Which simple, qualitative chemical test is commonly used in the laboratory to confirm the presence of 'unsaturation' (alkene/alkyne double or triple bonds) in an unknown hydrocarbon sample?",
    options: [
      "The Lassaigne fusion test",
      "Decolorization of bromine water (or Br₂ in CCl₄), or decolorization of cold alkaline potassium permanganate (Baeyer's Reagent)",
      "Reaction with sodium metal to evolve hydrogen gas",
      "The Lucas test"
    ],
    answerIndex: 1,
    explanation: "Unsaturated compounds undergo electrophilic addition. Bromine in carbon tetrachloride (red-brown) is decolorized as it adds across the double/triple bond. Similarly, purple Baeyer's reagent (KMnO₄) is decolorized to form a brown MnO₂ precipitate, confirming unsaturation."
  }
];
