import { Question } from "../types";

export const metalQuestions: Question[] = [
  {
    id: 181,
    question: "Why does the chemical reactivity of alkali metals (Group IA) increase as you descend the group from Lithium to Cesium?",
    options: [
      "Because their atomic radii decrease",
      "Because their ionization energy decreases, making it easier to lose the single outer s-orbital valence electron",
      "Because they form stronger covalent bonds with oxygen",
      "Because they become less metallic"
    ],
    answerIndex: 1,
    explanation: "As you descend Group IA, atomic size increases and the outer shell valence electron is further from the nucleus. This decreases the first ionization energy, making it easier to lose the electron and participate in reactions."
  },
  {
    id: 182,
    question: "What are the characteristic flame test colors exhibited by Lithium, Sodium, and Potassium ions, respectively?",
    options: [
      "Lithium: Green; Sodium: Lilac; Potassium: Crimson red",
      "Lithium: Crimson red; Sodium: Golden yellow; Potassium: Lilac (pale violet)",
      "Lithium: Brick red; Sodium: Apple green; Potassium: Yellow",
      "Lithium: Lilac; Sodium: Crimson; Potassium: Golden yellow"
    ],
    answerIndex: 1,
    explanation: "In flame tests, Lithium emits a brilliant crimson red, Sodium emits a highly characteristic golden yellow, and Potassium emits a distinct lilac (pale violet) color."
  },
  {
    id: 183,
    question: "What is the 'diagonal relationship' in the periodic table, and which pair of Group IA and IIA elements exhibits it?",
    options: [
      "A similarity in properties between elements in the same vertical column; Sodium and Potassium",
      "A similarity in chemical and physical properties between certain elements of the second period and the element diagonally below them in the third period; Lithium and Magnesium",
      "The tendency of elements to form diagonal crystal lattices; Beryllium and Calcium",
      "A relationship in electronegativity; Cesium and Barium"
    ],
    answerIndex: 1,
    explanation: "Lithium (Group IA, Period 2) and Magnesium (Group IIA, Period 3) share a diagonal relationship. Due to their similar ionic sizes and charge densities, they exhibit very similar chemical properties (e.g. both form nitrides directly with N₂, both have carbonates that decompose easily upon heating)."
  },
  {
    id: 184,
    question: "How do the solubilities of Group IIA (alkaline earth metal) Hydroxides and Sulfates trend as you descend the group from Beryllium to Barium?",
    options: [
      "Hydroxides become more soluble, while Sulfates become less soluble",
      "Hydroxides become less soluble, while Sulfates become more soluble",
      "Both Hydroxides and Sulfates become highly soluble",
      "Both Hydroxides and Sulfates become completely insoluble"
    ],
    answerIndex: 0,
    explanation: "For alkaline earth metals (Group IIA) descending the group: 1) Hydroxide solubility increases (Mg(OH)₂ is sparingly soluble, Ba(OH)₂ is highly soluble); 2) Sulfate solubility decreases (MgSO₄ is highly soluble, BaSO₄ is extremely insoluble)."
  },
  {
    id: 185,
    question: "Which of the following elements in Group IIA exhibits a diagonal relationship with Aluminum (Group IIIA) and forms an amphoteric oxide?",
    options: [
      "Magnesium",
      "Calcium",
      "Beryllium",
      "Barium"
    ],
    answerIndex: 2,
    explanation: "Beryllium (Period 2, Group IIA) has a diagonal relationship with Aluminum (Period 3, Group IIIA). Both elements form covalent, amphoteric oxides and hydroxides (reacting with both acids and bases), and both form covalent chlorides."
  },
  {
    id: 186,
    question: "What is the 'Inert Pair Effect' observed in heavy p-block elements, particularly in Group IVA (Group 14: Carbon, Silicon, Germanium, Tin, Lead)?",
    options: [
      "The tendency of the outer s-orbital valence electrons to remain unshared or unbonded, making lower oxidation states more stable than higher ones for heavier elements",
      "The inertness of noble gases in the presence of carbon",
      "The pairing of electrons in d-orbitals of transition metals",
      "The gaseous behavior of lead at high temperatures"
    ],
    answerIndex: 0,
    explanation: "The inert pair effect refers to the reluctance of the outermost s-electrons (ns²) to participate in bonding in heavy p-block elements. For Group IVA, carbon and silicon are stable in the +4 state, but descending to tin (Sn) and lead (Pb), the +2 state becomes increasingly stable. Lead(II) is much more stable than Lead(IV)."
  },
  {
    id: 187,
    question: "Based on the inert pair effect, which of the following statements is true regarding the redox properties of Tin (Sn) and Lead (Pb) compounds?",
    options: [
      "Sn²⁺ is a powerful oxidizing agent; Pb⁴⁺ is a powerful reducing agent",
      "Sn²⁺ is a strong reducing agent (readily oxidized to stable Sn⁴⁺); Pb⁴⁺ is a powerful oxidizing agent (readily reduced to stable Pb²⁺)",
      "Both Sn²⁺ and Pb²⁺ are inert and cannot participate in redox reactions",
      "Sn⁴⁺ is highly unstable and decomposes instantly"
    ],
    answerIndex: 1,
    explanation: "For Tin, the +4 state is more stable than +2; hence, Sn²⁺ is a good reducing agent (it wants to become Sn⁴⁺). For Lead, the +2 state is much more stable than +4; hence, Pb⁴⁺ is highly unstable and acts as a powerful oxidizing agent (it wants to absorb electrons to become stable Pb²⁺)."
  },
  {
    id: 188,
    question: "How do the acid-base properties of Group IVA oxides (MO and MO₂) change as you descend the group from Carbon to Lead?",
    options: [
      "They become increasingly acidic",
      "They change from acidic (CO₂, SiO₂) to amphoteric (GeO₂, SnO₂, PbO₂), showing a transition from non-metallic to metallic character",
      "They remain strongly basic throughout the group",
      "All oxides of Group IVA are completely neutral"
    ],
    answerIndex: 1,
    explanation: "Descending Group IVA, metallic character increases. Carbon dioxide (CO₂) is acidic; Silicon dioxide (SiO₂) is weakly acidic; while Germanium, Tin, and Lead oxides (like SnO₂ and PbO) are amphoteric, reacting with both strong acids and strong bases."
  },
  {
    id: 189,
    question: "Which of the following statements explains why Carbon can form stable catenated chains of infinite length, while Silicon exhibits limited catenation?",
    options: [
      "Carbon is a gas, whereas silicon is a solid",
      "The C-C single bond energy is extremely high and stable (approx. 348 kJ/mol), whereas the Si-Si single bond energy is much weaker (approx. 222 kJ/mol)",
      "Silicon contains only ionic bonds",
      "Carbon has d-orbitals available for bonding"
    ],
    answerIndex: 1,
    explanation: "Catenation is the ability of an element to form chains of covalent bonds. Carbon has a exceptionally strong C-C single bond, which makes catenation extremely stable. Silicon's Si-Si bond is much weaker, and Si-O bonds are thermodynamically favored over Si-Si bonds."
  },
  {
    id: 190,
    question: "Why does Carbon Tetrachloride (CCl₄) resist hydrolysis by water at room temperature, while Silicon Tetrachloride (SiCl₄) hydrolyzes violently in moist air?",
    options: [
      "Because silicon is a metal",
      "Because carbon lacks low-energy, empty d-orbitals in its valence shell to accommodate the incoming nucleophilic water molecule's lone pair, whereas silicon has vacant 3d-orbitals",
      "Because C-Cl bonds are highly ionic",
      "Because SiCl₄ is a solid at room temperature"
    ],
    answerIndex: 1,
    explanation: "Hydrolysis of Group IVA tetrahalides starts with a water molecule donating a lone pair to the central atom. Silicon (Period 3) has vacant 3d-orbitals that can accept this electron pair to form a coordinate bond. Carbon (Period 2) has no vacant d-orbitals and its valence octet is fully crowded, preventing attack."
  }
];
