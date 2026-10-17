import { Question } from "../types";

export const transitionMetalQuestions: Question[] = [
  {
    id: 191,
    question: "What is the official IUPAC definition of a Transition Metal?",
    options: [
      "Any element belonging to the d-block of the periodic table",
      "An element whose atom has a partially filled d-subshell, or which can give rise to cations with an incomplete d-subshell",
      "An element that conducts heat and electricity very well",
      "An element that has more than two valence electrons in its outer s-orbital"
    ],
    answerIndex: 1,
    explanation: "According to IUPAC, a transition metal is defined as an element whose atom has an incomplete d-subshell (partially filled d-orbital), or which can form stable cations with an incomplete d-subshell. This definition excludes Zinc, Cadmium, and Mercury because they have full d¹⁰ configurations in both their atomic and ionic (M²⁺) states."
  },
  {
    id: 192,
    question: "What are the anomalous ground-state electron configurations of Chromium (Cr, Z = 24) and Copper (Cu, Z = 29), and why do they occur?",
    options: [
      "Cr: [Ar] 3d⁴ 4s²; Cu: [Ar] 3d⁹ 4s²",
      "Cr: [Ar] 3d⁵ 4s¹; Cu: [Ar] 3d¹⁰ 4s¹; because half-filled (d⁵) and fully-filled (d¹⁰) subshells possess extra stability due to symmetry and high exchange energy",
      "Cr: [Ar] 3d⁶ 4s⁰; Cu: [Ar] 3d⁹ 4s²",
      "Cr: [Ar] 4s² 4p⁴; Cu: [Ar] 3d¹⁰ 4p¹"
    ],
    answerIndex: 1,
    explanation: "Chromium has a [Ar] 3d⁵ 4s¹ configuration, and Copper has a [Ar] 3d¹⁰ 4s¹ configuration. Transferring an electron from the 4s to the 3d orbital yields half-filled (d⁵) and fully-filled (d¹⁰) configurations, which are exceptionally stable due to symmetrical electron distribution and maximum exchange energies."
  },
  {
    id: 193,
    question: "Why do transition metals exhibit exceptionally high melting and boiling points compared to Group IA and IIA s-block metals?",
    options: [
      "Because they are highly electronegative",
      "Because both the outer s-electrons and the inner d-electrons participate in forming strong, delocalized metallic bonds in the crystal lattice",
      "Because they are gases at room temperature",
      "Because they contain ionic crystal structures"
    ],
    answerIndex: 1,
    explanation: "Transition metals have strong metallic bonds because they can delocalize both their outer s-orbital valence electrons and their inner d-orbital electrons. This increased number of bonding electrons forms a highly robust cohesive metallic lattice, raising melting and boiling points."
  },
  {
    id: 194,
    question: "What allows transition metals to exhibit a wide range of variable oxidation states (e.g., Manganese from +2 to +7)?",
    options: [
      "The rapid emission of alpha particles",
      "The fact that the energy levels of the ns and (n-1)d orbitals are extremely close, allowing electrons from both subshells to be used in chemical bonding",
      "The extremely large ionic radii of the metals",
      "Their low electronegativities"
    ],
    answerIndex: 1,
    explanation: "In transition elements, the energy difference between the outer ns orbital and the inner (n-1)d orbital is very small. Consequently, as ionization energy is supplied incrementally, electrons from both the s and d subshells can participate in bond formation, leading to multiple stable oxidation states."
  },
  {
    id: 195,
    question: "Why are the aqueous ions of most transition metals beautifully colored (e.g., Cu²⁺ is blue, Fe³⁺ is yellow-orange)?",
    options: [
      "Due to the presence of radioactive isotopes",
      "Because the d-orbitals are split into different energy levels in a crystal field; when visible light is absorbed, an electron is promoted from a lower d-orbital to a higher d-orbital (d-d transition), and the complementary color of the absorbed light is transmitted",
      "Because transition metal ions react with oxygen to form rust",
      "Because of the refraction of light through the metal nucleus"
    ],
    answerIndex: 1,
    explanation: "When ligands approach a transition metal ion, they split the five degenerate d-orbitals into energy levels of different energies (crystal field splitting). Incomplete d-orbitals allow electrons to absorb specific wavelengths of visible light to jump between these split d-levels (d-d transition), transmitting the complementary color."
  },
  {
    id: 196,
    question: "Why is the Scandium ion (Sc³⁺) in aqueous solution colorless?",
    options: [
      "Because it is highly poisonous",
      "Because Sc³⁺ has a [Ar] 3d⁰ configuration (it has no d-electrons), making d-d transitions impossible",
      "Because Scandium is not a metal",
      "Because it contains a full 3d¹⁰ shell that reflects all light"
    ],
    answerIndex: 1,
    explanation: "Scandium has a [Ar] 3d¹ 4s² configuration. The Sc³⁺ ion loses three electrons, leaving a [Ar] 3d⁰ configuration. With zero d-electrons, there can be no d-d transition, rendering Sc³⁺ compounds colorless."
  },
  {
    id: 197,
    question: "What determines the paramagnetism of transition metal complexes, and what formula expresses the 'spin-only' magnetic moment (μ)?",
    options: [
      "The total charge of the complex; μ = charge × radius",
      "The presence of unpaired electrons in d-orbitals; μ = √[n(n+2)] Bohr Magnetons (BM), where 'n' is the number of unpaired electrons",
      "The rate of rotation of the ligands; μ = √[2n+1]",
      "The molecular weight of the complex; μ = mass × temperature"
    ],
    answerIndex: 1,
    explanation: "Paramagnetism arises from the magnetic moments of unpaired electrons. Since transition metals often have partially filled d-subshells with unpaired electrons, they are paramagnetic. The spin-only magnetic moment is calculated using μ = √[n(n+2)] BM."
  },
  {
    id: 198,
    question: "Calculate the spin-only magnetic moment (μ) of a high-spin Fe²⁺ ion, which contains exactly four unpaired electrons. (Atomic number of Fe = 26)",
    options: [
      "1.73 BM",
      "2.83 BM",
      "3.87 BM",
      "4.90 BM"
    ],
    answerIndex: 3,
    explanation: "Using the formula μ = √[n(n+2)], where n = 4: μ = √[4(4+2)] = √[4 × 6] = √24 ≈ 4.90 Bohr Magnetons."
  },
  {
    id: 199,
    question: "Why do transition metals and their compounds make exceptional industrial catalysts (e.g., Fe in Haber, V₂O₅ in Contact, Ni in hydrogenation)?",
    options: [
      "Because they are extremely cheap and abundant",
      "Because of their ability to adopt multiple variable oxidation states and form coordination complexes, which helps lower the activation energy by providing alternative pathways or providing a high-surface-area metal template",
      "Because they are inert and do not react with anything",
      "Because they increase the temperature of the reaction vessel"
    ],
    answerIndex: 1,
    explanation: "The key reasons for transition metal catalytic activity are their ability to easily change oxidation states (facilitating redox cycles) and their ability to form weak coordinate complexes with reactant molecules, positioning them on the active catalyst surface and weakening their bonds."
  },
  {
    id: 200,
    question: "What characteristics of transition metal cations make them exceptionally prone to forming Coordinate (Complex) Compounds with ligands like NH₃, H₂O, and CN⁻?",
    options: [
      "Large atomic volume and low charge",
      "Relatively small ionic sizes, high positive charge densities, and the presence of vacant, low-energy d-orbitals that can accept electron lone pairs from ligands",
      "High solubility in non-polar solvents",
      "The absence of valence electrons"
    ],
    answerIndex: 1,
    explanation: "Transition metal cations are highly favorable hosts for complex formation because their small size and high positive charge give them a strong electrostatic field to attract ligands. Additionally, they possess empty, low-energy d-orbitals ready to accept coordinate covalent lone pairs from electron donors (ligands)."
  }
];
