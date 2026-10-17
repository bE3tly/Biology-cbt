import { Question } from "../types";

export const electronicQuestions: Question[] = [
  {
    id: 36,
    question: "What is the Inductive Effect in organic chemistry?",
    options: [
      "The temporary shift of pi-electrons in a multiple bond due to an attacking reagent",
      "The permanent polarization of a sigma bond due to electronegativity differences between atoms",
      "The resonance stabilization of a conjugated diene",
      "The displacement of electrons in a molecule under the influence of light"
    ],
    answerIndex: 1,
    explanation: "The Inductive Effect is a permanent effect involving the displacement of sigma (σ) electrons along a carbon chain due to the presence of an electronegative atom or group."
  },
  {
    id: 37,
    question: "How does the strength of the Inductive Effect change as distance from the substituent group increases?",
    options: [
      "It remains constant throughout the entire carbon chain",
      "It increases exponentially with distance",
      "It decreases rapidly and becomes practically negligible after 3 carbon atoms",
      "It oscillates periodically between positive and negative values"
    ],
    answerIndex: 2,
    explanation: "The Inductive Effect is transmitted through sigma bonds but attenuates very rapidly with distance, becoming negligible beyond the third carbon atom in a chain."
  },
  {
    id: 38,
    question: "Which of the following represents the correct decreasing order of electron-donating (+I) inductive effect strength for alkyl groups?",
    options: [
      "-CH₃ > -CH₂CH₃ > -CH(CH₃)₂ > -C(CH₃)₃",
      "-C(CH₃)₃ > -CH(CH₃)₂ > -CH₂CH₃ > -CH₃",
      "-CH₂CH₃ > -C(CH₃)₃ > -CH₃ > -CH(CH₃)₂",
      "All alkyl groups have identical +I strengths"
    ],
    answerIndex: 1,
    explanation: "More substituted alkyl groups have more electron density to donate; hence, the +I strength order is tertiary alkyl (-C(CH₃)₃) > secondary alkyl (-CH(CH₃)₂) > primary alkyl (-CH₂CH₃) > methyl (-CH₃)."
  },
  {
    id: 39,
    question: "Which of the following substituents exhibits a powerful electron-withdrawing (-I) inductive effect?",
    options: [
      "-O⁻",
      "-CH₃",
      "-NO₂",
      "-COO⁻"
    ],
    answerIndex: 2,
    explanation: "The nitro group (-NO₂) is a highly electron-withdrawing group due to the high electronegativities of nitrogen and oxygen, as well as the formal positive charge on the nitrogen atom."
  },
  {
    id: 40,
    question: "Which of the following halogenated carboxylic acids is the most acidic, and why?",
    options: [
      "Monochloroacetic acid, due to the +I effect of chlorine",
      "Monochloroacetic acid, due to the -I effect of chlorine",
      "Trichloroacetic acid, due to the cumulative -I effect of three chlorine atoms",
      "Acetic acid, because it lacks electronegative halogen substituents"
    ],
    answerIndex: 2,
    explanation: "Trichloroacetic acid (Cl₃CCOOH) is the strongest because the three highly electronegative chlorine atoms pull electron density away via the -I effect, stabilizing the resulting carboxylate anion."
  },
  {
    id: 41,
    question: "Arrange the following compounds in order of decreasing acid strength: (I) Acetic acid, (II) Chloroacetic acid, (III) Bromoacetic acid, (IV) Fluoroacetic acid.",
    options: [
      "I > III > II > IV",
      "IV > II > III > I",
      "IV > III > II > I",
      "I > II > III > IV"
    ],
    answerIndex: 1,
    explanation: "The -I strength of halogens decreases as electronegativity decreases: F > Cl > Br. Acetic acid has no halogen and has a +I methyl group, making it the weakest acid. Thus, the order is Fluoroacetic > Chloroacetic > Bromoacetic > Acetic."
  },
  {
    id: 42,
    question: "In the gaseous phase, what is the correct order of increasing basic strength of aliphatic amines, and why?",
    options: [
      "Tertiary (3°) < Secondary (2°) < Primary (1°) < NH₃",
      "NH₃ < Primary (1°) < Secondary (2°) < Tertiary (3°), due to the +I effect of alkyl groups",
      "NH₃ < Tertiary (3°) < Secondary (2°) < Primary (1°), due to steric hindrance",
      "All amines are weaker bases than ammonia"
    ],
    answerIndex: 1,
    explanation: "In the gas phase (where hydration/solvation effects are absent), the basicity of amines is determined solely by the +I effect of alkyl groups. Alkyl groups donate electron density to the nitrogen, making its lone pair more available. Thus, tertiary amines are the strongest bases."
  },
  {
    id: 43,
    question: "What is the Electromeric Effect in organic reaction mechanisms?",
    options: [
      "A permanent polarization of single bonds",
      "A temporary polarization of multiple bonds (pi bonds) that occurs only in the presence of an attacking reagent",
      "The vibration of electrons caused by an electric current",
      "The spontaneous expulsion of beta particles from carbon-14"
    ],
    answerIndex: 1,
    explanation: "The Electromeric Effect is a temporary effect where a complete transfer of shared pi-electrons of a multiple bond to one of the bonded atoms occurs at the demand of an active attacking reagent."
  },
  {
    id: 44,
    question: "Which reaction step illustrates the positive Electromeric (+E) effect?",
    options: [
      "Addition of H⁺ to an alkene (where pi electrons shift towards the carbon to which H⁺ bonds)",
      "Addition of CN⁻ to a carbonyl group (where pi electrons shift away from the carbon receiving CN⁻)",
      "The ionization of acetic acid in water",
      "The free radical substitution of methane"
    ],
    answerIndex: 0,
    explanation: "In a +E effect, the pi-electrons of the double bond are transferred to the atom to which the attacking reagent (electrophile, like H⁺) gets attached. Addition of H⁺ to an alkene is a classic example."
  },
  {
    id: 45,
    question: "What is the Mesomeric (Resonance) Effect?",
    options: [
      "A temporary shift of sigma electrons along a saturated carbon chain",
      "A permanent polarization produced in a conjugated system by the interaction of two pi-bonds or a pi-bond and a lone pair on an adjacent atom",
      "The thermal decomposition of organic polymers",
      "The magnetic resonance of carbon nuclei"
    ],
    answerIndex: 1,
    explanation: "The Mesomeric (Resonance) effect is a permanent effect where electron density is redistributed through a conjugated pi-system, mediated by overlap of p-orbitals."
  },
  {
    id: 46,
    question: "Which of the following functional groups acts as a +M (electron-donating by resonance) group when attached to a conjugated system?",
    options: [
      "-NO₂",
      "-CN",
      "-NH₂",
      "-CHO"
    ],
    answerIndex: 2,
    explanation: "Groups with a lone pair on the atom directly attached to the conjugated system, like amino (-NH₂), can donate their lone pair into the conjugated pi-system, acting as +M groups."
  },
  {
    id: 47,
    question: "Which of the following functional groups acts as a -M (electron-withdrawing by resonance) group in an aromatic system?",
    options: [
      "-OH",
      "-OCH₃",
      "-Cl",
      "-C≡N"
    ],
    answerIndex: 3,
    explanation: "The nitrile group (-C≡N) is electron-withdrawing by resonance (-M) because its multiple bond is connected to a highly electronegative nitrogen atom, enabling it to pull pi-electron density out of the ring."
  },
  {
    id: 48,
    question: "Why is Phenol significantly more acidic than Cyclohexanol?",
    options: [
      "Because cyclohexanol has a flat, aromatic ring",
      "Because the phenoxide ion formed upon deprotonation is resonance-stabilized by the benzene ring, whereas the cyclohexoxide ion is not",
      "Because phenol is sp³ hybridized",
      "Because of the strong +I effect of the phenol ring"
    ],
    answerIndex: 1,
    explanation: "Deprotonation of phenol yields the phenoxide ion, where the negative charge on oxygen is highly delocalized into the benzene ring through resonance (+M effect). Cyclohexoxide has no conjugate pi-system, so the negative charge is localized, making cyclohexanol much less acidic."
  },
  {
    id: 49,
    question: "Which of the following is NOT a valid rule for drawing contributing resonance structures of a molecule?",
    options: [
      "The positions of all nuclei must remain the same in all structures",
      "All resonance structures must have the same number of paired and unpaired electrons",
      "Atoms can be moved freely to different positions across the molecule",
      "The octet rule must not be violated for second-period elements"
    ],
    answerIndex: 2,
    explanation: "In resonance, only electrons (pi-electrons and lone pairs) are allowed to move. The positions of the nuclei (atoms) must remain strictly constant. If atoms move, the structures are isomers, not resonance contributors."
  },
  {
    id: 50,
    question: "What is Hyperconjugation (often referred to as 'no-bond resonance')?",
    options: [
      "The complete ionization of a saturated alkane",
      "The overlap of a C-H sigma (σ) orbital of an alkyl group with an adjacent vacant p-orbital or an unsaturated pi (π) system",
      "The hydrogen bonding that occurs between alcohols",
      "The ring strain present in cyclopropane"
    ],
    answerIndex: 1,
    explanation: "Hyperconjugation involves the delocalization of C-H sigma (σ) electrons of an alkyl group directly attached to an atom with an unhybridized p-orbital (like a carbocation) or an unsaturated double bond."
  },
  {
    id: 51,
    question: "What is the correct order of decreasing stability of alkyl carbocations, and what explains it?",
    options: [
      "Methyl > Primary (1°) > Secondary (2°) > Tertiary (3°), due to steric hindrance",
      "Tertiary (3°) > Secondary (2°) > Primary (1°) > Methyl, due to both inductive (+I) and hyperconjugation effects",
      "Secondary (2°) > Tertiary (3°) > Primary (1°) > Methyl, due to resonance",
      "All carbocations have identical stabilities"
    ],
    answerIndex: 1,
    explanation: "Tertiary carbocations have nine alpha-hydrogens to undergo stabilizing hyperconjugation and three alkyl groups contributing a +I effect. Primary and methyl carbocations have far fewer, making them highly unstable."
  },
  {
    id: 52,
    question: "Why are tertiary free radicals more stable than primary free radicals?",
    options: [
      "Due to greater steric protection and stabilizing hyperconjugative delocalization of the unpaired electron",
      "Because tertiary free radicals contain only ionic bonds",
      "Due to the absence of C-H bonds in tertiary systems",
      "Because primary radicals undergo spontaneous nuclear fusion"
    ],
    answerIndex: 0,
    explanation: "Just like carbocations, alkyl free radicals are electron-deficient species and are stabilized by hyperconjugation (delocalization of the unpaired electron) and the +I effect of alkyl groups."
  },
  {
    id: 53,
    question: "According to electronic theories, why is trans-but-2-ene more stable than but-1-ene?",
    options: [
      "Because but-1-ene has a higher molecular weight",
      "Because trans-but-2-ene has six alpha-hydrogens contributing to stabilizing hyperconjugation, whereas but-1-ene has only two",
      "Because trans-but-2-ene lacks any sigma bonds",
      "Because but-1-ene is cyclic"
    ],
    answerIndex: 1,
    explanation: "Alkenes are stabilized by alkyl substitution on the double bond carbons. trans-But-2-ene has two methyl groups (6 alpha-hydrogens total) adjacent to the sp² carbons, allowing 6 hyperconjugative structures, whereas but-1-ene has only one ethyl group (2 alpha-hydrogens)."
  },
  {
    id: 54,
    question: "The number of hyperconjugation structures possible for an alkyl carbocation or alkene is directly proportional to:",
    options: [
      "The number of carbon atoms in the longest chain",
      "The number of alpha-hydrogen atoms adjacent to the carbocation or double bond",
      "The electronegativity of the substituent",
      "The molecular weight of the compound"
    ],
    answerIndex: 1,
    explanation: "Each alpha-hydrogen atom (C-H bond on a carbon adjacent to the electron-deficient center or unsaturated bond) can participate in hyperconjugation. Thus, more alpha-hydrogens mean more stabilizing hyperconjugative structures."
  },
  {
    id: 55,
    question: "When evaluating the relative stabilizing influence of various electronic effects on a molecule, which is generally the most powerful?",
    options: [
      "The Inductive Effect",
      "The Electromeric Effect",
      "The Resonance/Mesomeric Effect",
      "Hyperconjugation"
    ],
    answerIndex: 2,
    explanation: "Under ordinary conditions, the permanent Resonance/Mesomeric effect involves complete pi-electron delocalization and is typically the strongest, followed by Hyperconjugation, and then the Inductive effect (which only polarizes sigma bonds)."
  }
];
