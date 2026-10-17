import { Question } from "../types";

export const historyQuestions: Question[] = [
  {
    id: 1,
    question: "Which Swedish chemist is credited with coining the term 'organic chemistry' in 1807 and proposing the Vital Force Theory?",
    options: [
      "Antoine Lavoisier",
      "Jöns Jacob Berzelius",
      "Friedrich Wöhler",
      "Hermann Kolbe"
    ],
    answerIndex: 1,
    explanation: "Jöns Jacob Berzelius coined the term 'organic chemistry' in 1807 and proposed that organic substances could only be produced by living organisms possessing a mysterious 'vital force' (vis vitalis)."
  },
  {
    id: 2,
    question: "What paradigm-shifting experiment did Friedrich Wöhler perform in 1828 that cracked the foundations of vitalism?",
    options: [
      "The synthesis of acetic acid from elemental carbon and sulfur",
      "The synthesis of urea by heating an inorganic salt, ammonium cyanate",
      "The preparation of methane gas from carbon monoxide",
      "The isolation of benzene from coal tar"
    ],
    answerIndex: 1,
    explanation: "In 1828, Friedrich Wöhler successfully synthesized the organic compound urea by heating the inorganic compound ammonium cyanate, showing that organic compounds can be made in the lab without a vital force."
  },
  {
    id: 3,
    question: "What is the correct chemical equation representing Wöhler's famous 1828 synthesis of urea?",
    options: [
      "NH₄OCN + heat → H₂NCONH₂",
      "NH₄Cl + NaOCN → NaCl + CO₂",
      "CH₄ + N₂O + heat → H₂NCONH₂",
      "CO₂ + 2NH₃ + heat → H₂NCONH₂ + H₂O"
    ],
    answerIndex: 0,
    explanation: "Wöhler's synthesis is represented by the thermal isomerization of ammonium cyanate (NH₄OCN) into urea (H₂NCONH₂)."
  },
  {
    id: 4,
    question: "Which organic chemist synthesized acetic acid from purely inorganic sources in 1845, providing an absolute proof against vitalism?",
    options: [
      "Hermann Kolbe",
      "Marcellin Berthelot",
      "August Kekulé",
      "William Henry Perkin"
    ],
    answerIndex: 0,
    explanation: "Hermann Kolbe synthesized acetic acid in 1845 directly from inorganic elements (carbon, hydrogen, and chlorine), which provided definitive evidence that even complex organic acids could be built without living systems."
  },
  {
    id: 5,
    question: "Which French chemist in the 1850s synthesized methane, acetylene, benzene, and fats, demonstrating that synthetic organic chemistry could mimic nature widely?",
    options: [
      "Antoine Lavoisier",
      "Joseph Proust",
      "Marcellin Berthelot",
      "Louis Pasteur"
    ],
    answerIndex: 2,
    explanation: "Marcellin Berthelot synthesized many organic compounds like methane, acetylene, benzene, and fats from inorganic compounds, establishing synthetic organic chemistry as a broad discipline."
  },
  {
    id: 6,
    question: "What did the 'Vital Force Doctrine' (vitalism) claim regarding organic compounds?",
    options: [
      "They are identical to inorganic compounds in all physical properties",
      "They contain a spiritual essence that prevents them from reacting in a test tube",
      "They can only be created within living organisms under the influence of a unique force",
      "They do not contain carbon atoms"
    ],
    answerIndex: 2,
    explanation: "Vitalism claimed that organic compounds could not be synthesized in the laboratory because their creation required a 'vital force' (vis vitalis) found only in living tissues."
  },
  {
    id: 7,
    question: "In the late 18th century, who showed that organic substances are primarily composed of carbon, hydrogen, and sometimes oxygen and nitrogen?",
    options: [
      "Antoine Lavoisier",
      "John Dalton",
      "Robert Boyle",
      "Dmitri Mendeleev"
    ],
    answerIndex: 0,
    explanation: "Antoine Lavoisier developed methods of combustion analysis and proved that organic compounds are composed mainly of carbon, hydrogen, oxygen, and sometimes nitrogen."
  },
  {
    id: 8,
    question: "What was the historical significance of William Henry Perkin's accidental discovery of 'mauveine' in 1856?",
    options: [
      "It was the first synthetic plastic, launching the polymers era",
      "It was the first synthetic organic dye, launching the synthetic chemical industry",
      "It proved the cyclic structure of benzene",
      "It led to the invention of dynamite"
    ],
    answerIndex: 1,
    explanation: "In 1856, 18-year-old William Henry Perkin accidentally synthesized mauveine (aniline purple) while trying to make quinine, which founded the synthetic organic dye and chemical industries."
  },
  {
    id: 9,
    question: "Which German chemist proposed the quadrivalence of carbon and that carbon atoms can link to form chains, which formed the basis of structural organic chemistry in 1858?",
    options: [
      "August Kekulé",
      "Friedrich Wöhler",
      "Emil Fischer",
      "Viktor Meyer"
    ],
    answerIndex: 0,
    explanation: "August Kekulé (along with Archibald Scott Couper) independently proposed in 1858 that carbon is tetravalent and can form chains, laying the foundation of structural organic chemistry."
  },
  {
    id: 10,
    question: "Who proposed the first accepted cyclic, ring structure of benzene in 1865, supposedly inspired by a dream of a snake biting its tail?",
    options: [
      "Alexander Butlerov",
      "August Kekulé",
      "Jacobus van 't Hoff",
      "Hermann Kolbe"
    ],
    answerIndex: 1,
    explanation: "August Kekulé proposed the cyclic six-carbon ring structure of benzene in 1865, solving a major puzzle of aromatic compound structure."
  },
  {
    id: 11,
    question: "Which two scientists independently proposed the tetrahedral carbon hypothesis in 1874, laying the foundations of stereochemistry?",
    options: [
      "Jacobus Henricus van 't Hoff and Joseph Achille Le Bel",
      "August Kekulé and Alexander Butlerov",
      "Emil Fischer and Wallace Carothers",
      "Louis Pasteur and Marie Curie"
    ],
    answerIndex: 0,
    explanation: "In 1874, Jacobus Henricus van 't Hoff and Joseph Achille Le Bel independently proposed that carbon's four bonds are arranged tetrahedrally in 3D space, which explained optical isomerism."
  },
  {
    id: 12,
    question: "Which Nobel laureate is famous for his extensive research in carbohydrates and purines, and proposed the 'lock-and-key' model for enzyme-substrate binding?",
    options: [
      "Emil Fischer",
      "Robert Woodward",
      "Gilbert Lewis",
      "Linus Pauling"
    ],
    answerIndex: 0,
    explanation: "Emil Fischer synthesized and determined the structures of sugars and purines, and proposed the lock-and-key model of enzyme action in 1894."
  },
  {
    id: 13,
    question: "Which DuPont scientist successfully synthesized Nylon-6,6 in 1935, ushering in the modern 'Plastics and Synthetic Fibers Age'?",
    options: [
      "Wallace Carothers",
      "Leo Baekeland",
      "Roy Plunkett",
      "Stephanie Kwolek"
    ],
    answerIndex: 0,
    explanation: "Wallace Carothers at DuPont invented Nylon-6,6 in 1935, which was the first fully synthetic fiber and marked a major milestone in polymer chemistry."
  },
  {
    id: 14,
    question: "Why are ancient practices like extracting plant dyes (indigo) and fermenting sugars into alcohol considered 'practical arts' rather than systematic chemistry?",
    options: [
      "Because they did not involve any actual organic compounds",
      "Because they were carried out without systematic scientific theories or an understanding of atomic/elemental laws",
      "Because they were illegal during antiquity",
      "Because they did not produce useful materials"
    ],
    answerIndex: 1,
    explanation: "While ancient societies successfully performed chemical transformations (dyeing, fermentation, metallurgy), they lacked atomic theory, balanced equations, or systematic experimental methodology, classifying their work as practical arts."
  },
  {
    id: 15,
    question: "What is the modern, accepted definition of organic chemistry?",
    options: [
      "The chemistry of compounds that can only be extracted from living things",
      "The study of compounds containing carbon atoms, regardless of their origin",
      "The study of substances that do not contain covalent bonds",
      "The chemistry of group IA and IIA elements"
    ],
    answerIndex: 1,
    explanation: "Modern organic chemistry is defined simply as the study of carbon-containing compounds, both natural and synthetic (with exceptions like carbonates, simple oxides like CO₂, and cyanides which are categorized as inorganic)."
  },
  {
    id: 16,
    question: "Which red dye, historically extracted from the madder plant, was synthesized from coal tar derivatives by Carl Graebe and Carl Liebermann in 1868?",
    options: [
      "Indigo",
      "Alizarin",
      "Mauveine",
      "Fluorescein"
    ],
    answerIndex: 1,
    explanation: "In 1868, Graebe and Liebermann synthesized alizarin, a highly popular natural red dye, marking the first laboratory synthesis of a complex plant-derived dye."
  },
  {
    id: 17,
    question: "Which chemist is widely regarded as the father of modern organic synthesis, having completed the total syntheses of cholesterol, chlorophyll, and vitamin B12?",
    options: [
      "Robert Burns Woodward",
      "Linus Pauling",
      "Elias James Corey",
      "Richard Feynman"
    ],
    answerIndex: 0,
    explanation: "Robert Burns Woodward is renowned for his extraordinary achievements in the total synthesis of complex natural products (cholesterol, chlorophyll, strychnine, vitamin B12) and won the Nobel Prize in Chemistry in 1965."
  },
  {
    id: 18,
    question: "Which pioneer of chemotherapy synthesized the arsenic-based organic compound 'Salvarsan' in 1909 for treating syphilis, establishing the field of organometallic drugs?",
    options: [
      "Paul Ehrlich",
      "Alexander Fleming",
      "Louis Pasteur",
      "Robert Koch"
    ],
    answerIndex: 0,
    explanation: "Paul Ehrlich synthesized Salvarsan, an arsenic-based organic molecule, which was the first modern chemotherapy drug used to target a specific pathogen."
  },
  {
    id: 19,
    question: "In the 19th century, what was the primary, abundant raw material from which organic chemists isolated aromatic compounds like benzene, phenol, and aniline?",
    options: [
      "Petroleum crude oil",
      "Coal tar",
      "Animal fats",
      "Wood distillates"
    ],
    answerIndex: 1,
    explanation: "During the 1800s, coal tar (a byproduct of turning coal into coke for steel mills) was the primary feedstock from which chemists extracted aromatic hydrocarbons and started the industrial dye industry."
  },
  {
    id: 20,
    question: "What is the collective significance of the early syntheses of Wöhler (urea), Kolbe (acetic acid), and Berthelot (fats)?",
    options: [
      "They showed that living organisms do not obey physical laws",
      "They demonstrated that organic and inorganic compounds are subject to the same physical and chemical laws",
      "They proved that carbon cannot form double bonds",
      "They proved that organic substances always contain nitrogen"
    ],
    answerIndex: 1,
    explanation: "These key syntheses collectively demolished vitalism, proving that organic and inorganic substances are governed by the exact same physical and chemical principles, and that synthetic duplicates can be created in the laboratory."
  }
];
