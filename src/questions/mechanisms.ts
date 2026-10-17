import { Question } from "../types";

export const mechanismQuestions: Question[] = [
  {
    id: 116,
    question: "What are the products of Homolytic and Heterolytic covalent bond cleavages, respectively?",
    options: [
      "Homolytic: carbocations; Heterolytic: free radicals",
      "Homolytic: free radicals; Heterolytic: ions (cations and anions)",
      "Homolytic: carbanions; Heterolytic: carbocations",
      "They both produce identical neutral molecules"
    ],
    answerIndex: 1,
    explanation: "Homolytic cleavage split the shared pair of electrons equally, yielding two highly reactive, neutral free radicals. Heterolytic cleavage shifts both bonding electrons to the more electronegative atom, yielding a cation (such as a carbocation) and an anion (such as a halide)."
  },
  {
    id: 117,
    question: "Which of the following pairs correctly lists a nucleophile and an electrophile?",
    options: [
      "Nucleophile: H⁺; Electrophile: OH⁻",
      "Nucleophile: OH⁻ (or H₂O); Electrophile: H⁺ (or AlCl₃)",
      "Nucleophile: AlCl₃; Electrophile: NH₃",
      "Both are electron-deficient species"
    ],
    answerIndex: 1,
    explanation: "A nucleophile is an electron-rich species with a lone pair or negative charge seeking an electron-deficient center (like OH⁻, H₂O, CN⁻). An electrophile is an electron-deficient species seeking electron density (like H⁺, AlCl₃, NO₂⁺)."
  },
  {
    id: 118,
    question: "Which of the following is a key characteristic of the Unimolecular Nucleophilic Substitution (S_N1) mechanism?",
    options: [
      "It proceeds in a single concerted step with a pentacoordinate transition state",
      "It involves the formation of a planar carbocation intermediate in a two-step process, leading to racemization of configuration",
      "It is highly favored by primary alkyl halides and polar aprotic solvents",
      "It exhibits second-order reaction kinetics"
    ],
    answerIndex: 1,
    explanation: "The S_N1 mechanism is a two-step reaction: the leaving group leaves first to form a flat, planar carbocation intermediate. Nucleophilic attack can then occur from either side, resulting in partial or complete racemization of chiral molecules."
  },
  {
    id: 119,
    question: "What is the rate-determining step in an S_N1 reaction?",
    options: [
      "The rapid attack of the nucleophile on the carbocation",
      "The slow, endothermic ionization of the alkyl halide to form the carbocation intermediate",
      "The proton transfer to the solvent",
      "The neutralization of the acid catalyst"
    ],
    answerIndex: 1,
    explanation: "The slow step (rate-determining step) in an S_N1 reaction is the dissociation of the carbon-leaving group bond to form the carbocation intermediate, which is why the rate law depends only on the alkyl halide concentration."
  },
  {
    id: 120,
    question: "Which of the following describes the Bimolecular Nucleophilic Substitution (S_N2) mechanism?",
    options: [
      "A two-step mechanism that is accelerated by tertiary carbocations",
      "A single-step, concerted mechanism with backside attack of the nucleophile, causing complete inversion of configuration (Walden Inversion)",
      "A reaction that displays first-order kinetics",
      "A mechanism highly favored in polar protic solvents like water"
    ],
    answerIndex: 1,
    explanation: "S_N2 is a concerted, one-step process. The nucleophile attacks from the backside (opposite the leaving group) through a transition state, expelling the leaving group and resulting in a complete inversion of stereochemical configuration."
  },
  {
    id: 121,
    question: "Arrange the following alkyl halides in order of decreasing reactivity towards S_N2 nucleophilic substitution:",
    options: [
      "Tertiary (3°) > Secondary (2°) > Primary (1°) > Methyl",
      "Methyl > Primary (1°) > Secondary (2°) > Tertiary (3°)",
      "Secondary (2°) > Primary (1°) > Methyl > Tertiary (3°)",
      "They all react at identical rates in S_N2"
    ],
    answerIndex: 1,
    explanation: "S_N2 reactivity is heavily determined by steric hindrance at the reaction center. The backside attack of the nucleophile is highly sensitive to crowding, making methyl and primary alkyl halides extremely reactive, while tertiary halides are practically inert."
  },
  {
    id: 122,
    question: "Why are polar aprotic solvents (like DMSO, acetone, or DMF) preferred for S_N2 reactions?",
    options: [
      "Because they form strong hydrogen bonds with nucleophiles, stabilizing them",
      "Because they dissolve the nucleophile without solvating (and thus deactivating) the nucleophilic anion, enhancing its nucleophilicity",
      "Because they lower the temperature of the boiling flask",
      "Because they decompose the alkyl halide instantly"
    ],
    answerIndex: 1,
    explanation: "Polar aprotic solvents dissolve ionic reagents but do not solvate anions (nucleophiles) strongly because they cannot form hydrogen bonds. This leaves the nucleophile 'naked' and highly reactive, speeding up S_N2 reactions."
  },
  {
    id: 123,
    question: "For a given alkyl group, what is the order of reactivity of alkyl halides in nucleophilic substitutions, and why?",
    options: [
      "R-F > R-Cl > R-Br > R-I, because fluorine is the most electronegative",
      "R-I > R-Br > R-Cl > R-F, because iodide is the best leaving group due to its large size and weak C-I bond",
      "They all have identical reactivity since they are all halogens",
      "R-Cl > R-Br > R-I > R-F"
    ],
    answerIndex: 1,
    explanation: "The C-I bond is the longest, weakest, and most easily broken. Also, the iodide ion (I⁻) is a highly stable conjugate base (weak base) due to its large size, making it an excellent leaving group."
  },
  {
    id: 124,
    question: "What is Saytzeff's (Zaitsev's) Rule in elimination reactions?",
    options: [
      "The nucleophile always attacks the least substituted carbon",
      "During dehydrohalogenation of alkyl halides, the preferred alkene product is the more highly substituted, more stable alkene",
      "The halogen always leaves from the terminal methyl group",
      "Hydrogen always adds to the carbon with more hydrogens"
    ],
    answerIndex: 1,
    explanation: "Saytzeff's Rule states that in elimination reactions (dehydrohalogenation), the preferred (major) product is the highly substituted alkene (the alkene with the greater number of alkyl groups attached to the double-bonded carbon atoms) because it is thermodynamically more stable."
  },
  {
    id: 125,
    question: "What is Markownikoff's Rule for the electrophilic addition of hydrogen halides (HX) to unsymmetrical alkenes?",
    options: [
      "The halogen adds to the carbon with more hydrogen atoms",
      "The hydrogen atom adds to the carbon atom of the double bond that already has the greater number of hydrogen atoms, while the halogen adds to the carbon with fewer hydrogens",
      "The double bond splits homolytically to yield free radicals",
      "The alkene undergoes spontaneous isomerization"
    ],
    answerIndex: 1,
    explanation: "Markownikoff's Rule states that in the addition of HX to an unsymmetrical alkene, the acidic hydrogen (H) adds to the carbon of the double bond that has more hydrogens, creating the more stable carbocation intermediate (e.g. secondary or tertiary), which is then attacked by the halide."
  },
  {
    id: 126,
    question: "Under what conditions does the addition of hydrogen bromide (HBr) to an unsymmetrical alkene yield the 'anti-Markownikoff' product?",
    options: [
      "At very high temperatures without any catalyst",
      "In the presence of organic peroxides (e.g. benzoyl peroxide), which switches the mechanism from electrophilic addition to free-radical addition",
      "When dissolved in concentrated sulfuric acid",
      "It never yields anti-Markownikoff products"
    ],
    answerIndex: 1,
    explanation: "In the presence of peroxides, HBr undergoes a free-radical addition mechanism. The chain-propagating step involves a bromine radical (Br•) attacking the alkene first, adding to the carbon with more hydrogens to produce the more stable alkyl radical, eventually leading to the anti-Markownikoff alkyl bromide."
  },
  {
    id: 127,
    question: "Why do hydrogen chloride (HCl) and hydrogen iodide (HI) NOT exhibit the 'peroxide effect' (anti-Markownikoff addition) in the presence of peroxides?",
    options: [
      "Because they do not contain hydrogen atoms",
      "Because the H-Cl bond is too strong to undergo homolytic cleavage by alkoxy radicals, and the addition step of the iodine radical to alkenes is endothermic",
      "Because they are gases at room temperature",
      "Because they are extremely weak acids"
    ],
    answerIndex: 1,
    explanation: "The peroxide effect requires both propagation steps to be exothermic. For HCl, the first step (homolytic cleavage of H-Cl by RO•) is highly endothermic because the H-Cl bond is too strong. For HI, the addition of the iodine radical to the double bond is endothermic because the C-I bond is too weak. Thus, only HBr undergoes peroxide-catalyzed radical addition."
  },
  {
    id: 128,
    question: "What are the three consecutive mechanistic steps in the free-radical halogenation of alkanes?",
    options: [
      "Addition, substitution, and elimination",
      "Initiation, propagation, and termination",
      "Ionization, rearrangement, and combination",
      "Protonation, nucleophilic attack, and deprotonation"
    ],
    answerIndex: 1,
    explanation: "Free-radical chain reactions proceed via: 1) Initiation (homolytic cleavage of halogen molecules by light/heat); 2) Propagation (radical-substrate reactions regenerating radicals); 3) Termination (combination of any two radicals to form stable molecules)."
  },
  {
    id: 129,
    question: "During the light-initiated chlorination of methane, what species is responsible for starting the chemical chain propagation?",
    options: [
      "A carbocation intermediate",
      "A chlorine free radical, Cl•",
      "A methyl anion, CH₃⁻",
      "A chlorine molecule in its singlet state"
    ],
    answerIndex: 1,
    explanation: "In the initiation step, UV light cleaves a Cl-Cl bond homolytically to form chlorine radicals (Cl•). In the first propagation step, this Cl• abstracts a hydrogen from methane, starting the chain propagation."
  },
  {
    id: 130,
    question: "When a secondary carbocation can rearrange to a more stable tertiary carbocation, what is the typical shift mechanism?",
    options: [
      "A 1,2-hydride shift or 1,2-alkyl (methyl) shift",
      "A homolytic elimination",
      "A nucleophilic addition of water",
      "A molecular rotation of 180°"
    ],
    answerIndex: 0,
    explanation: "Carbocations can undergo skeletal rearrangement to achieve greater stability. This occurs via a 1,2-hydride shift (movement of a hydrogen with its electron pair) or a 1,2-alkyl (methyl) shift from an adjacent carbon to the positive carbon."
  },
  {
    id: 131,
    question: "What is the correct decreasing order of stability for carbon-centered intermediates: Allyl, Tertiary, Secondary, Primary, and Methyl carbocations?",
    options: [
      "Methyl > Primary > Secondary > Tertiary > Allyl",
      "Allyl ≈ Tertiary (3°) > Secondary (2°) > Primary (1°) > Methyl",
      "Secondary > Tertiary > Allyl > Primary > Methyl",
      "All carbocations are equally stable"
    ],
    answerIndex: 1,
    explanation: "Allylic carbocations are highly stabilized by resonance. Tertiary carbocations are stabilized by 9 alpha-hydrogens (hyperconjugation) and three +I groups. The order of stability is: Allyl ≈ Tertiary > Secondary > Primary > Methyl."
  },
  {
    id: 132,
    question: "What is the correct stability order of alkyl carbanions, and how does it compare to carbocations?",
    options: [
      "Methyl < Primary (1°) < Secondary (2°) < Tertiary (3°); same as carbocations",
      "Methyl > Primary (1°) > Secondary (2°) > Tertiary (3°); opposite of carbocations",
      "Secondary > Primary > Tertiary > Methyl",
      "Carbanions are always more stable than carbocations"
    ],
    answerIndex: 1,
    explanation: "A carbanion has a negatively charged carbon. Alkyl groups are electron-donating (+I). Donating electron density into an already negative carbon destabilizes it. Thus, less-substituted carbanions are more stable (Methyl > 1° > 2° > 3°), which is the exact opposite of carbocation stability."
  },
  {
    id: 133,
    question: "In reaction kinetics, what is the distinction between 'molecularity' and 'order' of a reaction?",
    options: [
      "Molecularity is experimentally determined, while order is a theoretical concept",
      "Molecularity is the number of reactant molecules participating in the rate-determining elementary step; Order is the sum of exponents in the experimentally determined rate law",
      "Molecularity must always be a fraction, while order is always a whole number",
      "They are synonyms and describe identical quantities"
    ],
    answerIndex: 1,
    explanation: "Molecularity is a theoretical property of an elementary reaction step, indicating how many reactant particles collide. Reaction order is an empirical (experimental) value representing the concentration exponents in the rate equation, and can be zero or fractional."
  },
  {
    id: 134,
    question: "What does the term 'Activation Energy' (Ea) represent in reaction mechanisms and kinetics?",
    options: [
      "The net heat released during an exothermic reaction",
      "The minimum kinetic energy that colliding reactant molecules must possess in order to undergo a chemical reaction",
      "The energy of the stable products",
      "The vibration frequency of the solvent molecules"
    ],
    answerIndex: 1,
    explanation: "Activation energy is the minimum kinetic energy barrier that reactants must overcome to reach the transition state and transform into products."
  },
  {
    id: 135,
    question: "What is the characteristic type of reaction mechanism for carbonyl compounds (aldehydes and ketones), and why?",
    options: [
      "Electrophilic substitution, due to the high electron density of carbon",
      "Nucleophilic addition, because the highly polar carbonyl carbon is electron-deficient (electrophilic) and readily attacked by nucleophiles",
      "Free radical substitution",
      "Homolytic elimination"
    ],
    answerIndex: 1,
    explanation: "The carbonyl carbon is double-bonded to a highly electronegative oxygen, creating a strong partial positive charge on carbon (electrophilic center). Thus, aldehydes and ketones characteristically undergo nucleophilic addition reactions."
  }
];
