import { Question } from "../types";

export const stereochemQuestions: Question[] = [
  {
    id: 136,
    question: "What is the distinction between structural (constitutional) isomers and stereoisomers?",
    options: [
      "Structural isomers have different molecular formulas; stereoisomers have the same molecular formula",
      "Structural isomers have the same connectivity but different 3D shapes; stereoisomers have different bonding connectivities",
      "Structural isomers have different bonding connectivities of atoms; stereoisomers have the same bonding connectivity but differ in the orientation of atoms in 3D space",
      "They are two terms for the exact same concept"
    ],
    answerIndex: 2,
    explanation: "Structural (constitutional) isomers differ in the order in which atoms are connected (bonding connectivity). Stereoisomers have the same connectivity of atoms but differ in how those atoms are arranged in three-dimensional space."
  },
  {
    id: 137,
    question: "What are the structural requirements for a molecule to exhibit Geometrical (Cis-Trans) Isomerism?",
    options: [
      "The presence of a chiral carbon with four different groups attached",
      "Restricted rotation around a bond (like a C=C double bond or a ring) and each carbon of the double bond must be attached to two different groups",
      "The presence of a benzene ring with ortho substituents",
      "A molecular weight exceeding 100 g/mol"
    ],
    answerIndex: 1,
    explanation: "Cis-trans isomerism occurs due to restricted rotation (such as around a C=C double bond or in cyclic structures), provided that both carbons involved in the restricted rotation are bonded to two non-identical substituent groups."
  },
  {
    id: 138,
    question: "How does the E/Z nomenclature system assign configuration to a carbon-carbon double bond?",
    options: [
      "Based on the alphabetical order of the names of substituents",
      "Based on the Cahn-Ingold-Prelog (CIP) priority rules, where higher atomic number substituents get priority; if higher priority groups are on opposite sides, it is E; if on the same side, it is Z",
      "Based on the solubility of the isomers in water",
      "Based on the boiling point of the respective compounds"
    ],
    answerIndex: 1,
    explanation: "The E/Z system is based on CIP priority rules. Each double-bonded carbon's substituents are ranked by atomic number. If the two high-priority groups are on opposite sides, the configuration is E (Entgegen, opposite). If they are on the same side, it is Z (Zusammen, together)."
  },
  {
    id: 139,
    question: "What is a 'chiral carbon' (asymmetric carbon atom) in organic structures?",
    options: [
      "A carbon atom with an sp hybridization",
      "A carbon atom bonded to four different atoms or groups of atoms",
      "A carbon atom involved in a triple bond",
      "A carbon atom directly bonded to a transition metal"
    ],
    answerIndex: 1,
    explanation: "A chiral carbon is an asymmetric carbon (sp³ hybridized) that is covalently bonded to four chemically distinct atoms or groups, creating a center of asymmetry."
  },
  {
    id: 140,
    question: "What are Enantiomers?",
    options: [
      "Stereoisomers that are non-superimposable mirror images of each other, possessing identical physical properties in an achiral environment but rotating plane-polarized light in opposite directions",
      "Isomers with different bonding connectivities and boiling points",
      "Stereoisomers that are not mirror images of each other",
      "Conformational isomers that interconvert rapidly at room temperature"
    ],
    answerIndex: 0,
    explanation: "Enantiomers are chiral stereoisomers that are non-superimposable mirror images. They have identical melting points, boiling points, densities, and solubilities in achiral solvents, but they rotate plane-polarized light in equal and opposite directions."
  },
  {
    id: 141,
    question: "What are Diastereomers, and how do their properties compare to enantiomers?",
    options: [
      "They are superimposable mirror images with identical physical properties",
      "They are stereoisomers that are not mirror images of each other, and they can have different physical properties (melting points, boiling points, solubilities) and chemical reactivities",
      "They are identical molecules with different common names",
      "They only exist in gaseous states"
    ],
    answerIndex: 1,
    explanation: "Diastereomers are stereoisomers that are not mirror images. Because their spatial arrangements are fundamentally different (not just flipped like enantiomers), they possess different physical properties (density, solubility, boiling point) and different chemical reactivities."
  },
  {
    id: 142,
    question: "What is a 'Meso Compound' in stereochemistry?",
    options: [
      "A compound that contains no chiral centers and rotates plane-polarized light strongly",
      "An optically inactive compound that contains chiral centers but also has an internal plane of symmetry, making the molecule as a whole achiral",
      "A mixture of equal parts of enantiomers",
      "An intermediate in a chemical reaction"
    ],
    answerIndex: 1,
    explanation: "A meso compound contains two or more chiral centers but is achiral and optically inactive because it possesses an internal plane of symmetry that bisects the molecule, causing one half of the molecule to mirror the other half and cancel out optical rotation."
  },
  {
    id: 143,
    question: "What is a Racemic Mixture (racemate), and why is it optically inactive?",
    options: [
      "A mixture of diastereomers that cancel each other's reactions",
      "An equimolar mixture of two enantiomers, which is optically inactive due to 'external compensation' (the dextrorotatory rotation of one enantiomer is exactly balanced by the levorotatory rotation of the other)",
      "A pure liquid that does not dissolve in organic solvents",
      "A compound containing an internal plane of symmetry"
    ],
    answerIndex: 1,
    explanation: "A racemic mixture contains equal amounts (1:1 ratio) of dextrorotatory (+) and levorotatory (-) enantiomers. The optical rotation of one enantiomer cancels out the other, resulting in a net optical rotation of zero (optically inactive by external compensation)."
  },
  {
    id: 144,
    question: "What formula is used to calculate the Specific Rotation [α] of an optically active substance?",
    options: [
      "[α] = observed rotation / (concentration in g/mL × path length in decimeters)",
      "[α] = observed rotation × concentration × path length",
      "[α] = mass of substance / volume of tube",
      "[α] = temperature × wavelength / rotation"
    ],
    answerIndex: 0,
    explanation: "Specific rotation [α] is a standardized physical constant calculated as: [α] = α_observed / (c × l), where 'c' is concentration of the solution in g/mL (or density for pure liquid) and 'l' is the path length of the polarimeter sample tube in decimeters (dm)."
  },
  {
    id: 145,
    question: "When assigning R or S configuration to a chiral center using Cahn-Ingold-Prelog (CIP) rules, what are the primary steps?",
    options: [
      "Rank the four attached groups alphabetically, then trace 1 -> 2 -> 3",
      "Prioritize the four groups based on the atomic numbers of the atoms directly attached to the chiral carbon; orient the lowest priority group (priority 4) pointing away, and trace the path from priority 1 -> 2 -> 3. Clockwise is R, and counterclockwise is S",
      "Trace the path from priority 1 -> 2 -> 3. Counterclockwise is R, and clockwise is S",
      "Calculate the molecular weight of each group, and clockwise is always S"
    ],
    answerIndex: 1,
    explanation: "CIP rules rank groups by atomic number of the directly attached atoms (e.g. -I > -Br > -Cl > -F > -OH > -CH₃ > -H). With the lowest priority group (usually H) pointing away from you, a clockwise direction of priorities 1 -> 2 -> 3 is R (Rectus, right), and a counterclockwise direction is S (Sinister, left)."
  },
  {
    id: 146,
    question: "What are 'conformational isomers' (conformers)?",
    options: [
      "Stereoisomers that can only be interconverted by breaking and reforming covalent bonds",
      "Isomers that have different molecular weights",
      "Different spatial arrangements of the same molecule that can be interconverted simply by rotation about carbon-carbon single (sigma) bonds",
      "Molecules that have the same boiling points but different solubilities"
    ],
    answerIndex: 2,
    explanation: "Conformational isomers are different 3D shapes of a single molecule resulting from rotation around single (σ) bonds. Because single bonds rotate easily at room temperature, conformers usually interconvert rapidly."
  },
  {
    id: 147,
    question: "Which are the two extreme conformations of Ethane, and which is more stable?",
    options: [
      "Chair and boat conformations; chair is more stable",
      "Staggered and eclipsed conformations; staggered is more stable because it minimizes torsional strain (repulsion between C-H bonding electron pairs)",
      "Staggered and eclipsed conformations; eclipsed is more stable because the C-H bonds are close together",
      "Cis and trans conformations; trans is more stable"
    ],
    answerIndex: 1,
    explanation: "Ethane has staggered and eclipsed conformations. The staggered conformation is the energy minimum (most stable) because C-H bonds on adjacent carbons are as far apart as possible, minimizing torsional strain. The eclipsed conformation is the energy maximum (least stable)."
  },
  {
    id: 148,
    question: "What are the dihedral (torsional) angles between adjacent C-H bonds in the staggered and eclipsed conformations of ethane?",
    options: [
      "Staggered: 90°; Eclipsed: 180°",
      "Staggered: 60°; Eclipsed: 0°",
      "Staggered: 120°; Eclipsed: 60°",
      "Staggered: 180°; Eclipsed: 90°"
    ],
    answerIndex: 1,
    explanation: "In the staggered conformation of ethane, adjacent C-H bonds have a dihedral angle of 60°. In the eclipsed conformation, the C-H bonds align perfectly, making the dihedral angle 0°."
  },
  {
    id: 149,
    question: "Which of the following conformations of Cyclohexane is the most stable (representing the absolute thermodynamic energy minimum)?",
    options: [
      "The boat conformation",
      "The twist-boat conformation",
      "The chair conformation, because it minimizes angle, torsional, and steric strains",
      "The half-chair conformation"
    ],
    answerIndex: 2,
    explanation: "The chair conformation of cyclohexane is highly stable because all C-C-C bond angles are 111° (very close to the ideal tetrahedral angle of 109.5°), and all adjacent C-H bonds are fully staggered, eliminating torsional strain."
  },
  {
    id: 150,
    question: "Why is the boat conformation of cyclohexane significantly less stable than the chair conformation?",
    options: [
      "Because it is planar",
      "Due to torsional strain from eclipsed C-H bonds along its sides, and steric strain from the repulsive 'flagpole' interactions between the hydrogens on carbons 1 and 4",
      "Because it lacks any sigma bonds",
      "Because its carbon atoms are sp² hybridized"
    ],
    answerIndex: 1,
    explanation: "The boat conformation has two main destabilizing factors: 1) torsional strain because the C-H bonds along the base of the 'boat' are eclipsed; 2) steric strain (flagpole-flagpole interaction) because the two hydrogen atoms pointing inward at the top are forced close together."
  },
  {
    id: 151,
    question: "In the stable chair conformation of cyclohexane, how are the twelve C-H bonds oriented?",
    options: [
      "All twelve point outwards in the plane of the ring",
      "Six are axial (pointing vertically up and down, parallel to the ring axis) and six are equatorial (pointing outwards along the equator of the ring)",
      "All twelve point vertically upwards",
      "Six are cis and six are trans"
    ],
    answerIndex: 1,
    explanation: "Each of the six carbon atoms in cyclohexane chair conformation has one axial bond (pointing vertically up or down) and one equatorial bond (pointing slightly up or down, but directed outwards around the perimeter)."
  },
  {
    id: 152,
    question: "What structural interconversion occurs during a 'ring flip' of a cyclohexane chair conformation?",
    options: [
      "The molecule decomposes into hexane gas",
      "All axial substituents become equatorial, and all equatorial substituents become axial",
      "The carbon-carbon bonds break and form a double bond",
      "The carbon atoms change their hybridization from sp³ to sp²"
    ],
    answerIndex: 1,
    explanation: "A ring flip is a conformational change where one chair conformation converts into another. During this process, all bonds that were axial become equatorial, and all bonds that were equatorial become axial, though 'up' bonds remain 'up' and 'down' bonds remain 'down'."
  },
  {
    id: 153,
    question: "For a monosubstituted cyclohexane (like methylcyclohexane), why is the chair conformation with the substituent in the equatorial position more stable?",
    options: [
      "Because equatorial substituents can participate in hydrogen bonding with the solvent",
      "Because placing the substituent in the axial position creates steric strain due to repulsive 1,3-diaxial interactions with the axial hydrogens on the same side of the ring",
      "Because axial positions contain double bonds",
      "There is no difference in stability between the two positions"
    ],
    answerIndex: 1,
    explanation: "When a substituent is axial, it experiences steric clash with the other axial hydrogens on carbons 3 and 5 on the same side of the ring. These are called 1,3-diaxial steric interactions. Placing the group equatorial projects it away from the ring, avoiding this strain."
  },
  {
    id: 154,
    question: "If a chiral compound has a single asymmetric carbon with an (R) configuration, what is the configuration of its sole enantiomer?",
    options: [
      "(R) configuration",
      "(S) configuration",
      "(E) configuration",
      "(D) configuration"
    ],
    answerIndex: 1,
    explanation: "An enantiomer is a non-superimposable mirror image. Reflection inverts the stereochemistry at all chiral centers; thus, the enantiomer of an (R) stereoisomer must have the (S) configuration."
  },
  {
    id: 155,
    question: "For an organic molecule containing 'n' asymmetric carbon atoms, what is the maximum number of stereoisomers possible, according to the van 't Hoff rule?",
    options: [
      "2n",
      "n²",
      "2ⁿ",
      "2ⁿ⁻¹"
    ],
    answerIndex: 2,
    explanation: "The maximum number of stereoisomers for a compound with n chiral centers is 2ⁿ. The actual number can be fewer than 2ⁿ if some stereoisomers are meso compounds (which possess a plane of symmetry, making them identical)."
  },
  {
    id: 156,
    question: "What is the distinction between a 'stereospecific' reaction and a 'stereoselective' reaction?",
    options: [
      "Stereospecific reactions are always much faster than stereoselective ones",
      "A stereospecific reaction is one where a specific stereoisomeric reactant yields a specific stereoisomeric product (e.g. S_N2); A stereoselective reaction is one where one stereoisomer is preferentially formed over another",
      "They are identical terms in modern kinetics",
      "Stereospecific reactions do not involve carbon atoms"
    ],
    answerIndex: 1,
    explanation: "In a stereospecific reaction, the mechanism forces a specific stereoisomeric starting material to yield one unique stereochemical product (e.g., cis-alkene gives meso-dibromide). In a stereoselective reaction, the pathway simply favors the formation of one stereoisomer over others (e.g., getting trans-alkene over cis-alkene)."
  },
  {
    id: 157,
    question: "What does the 'resolution' of a racemic mixture mean in stereochemistry?",
    options: [
      "Determining the molecular weight of the mixture using a mass spectrometer",
      "The separation of a racemic mixture into its pure individual enantiomers",
      "Converting the enantiomers into a meso compound",
      "Dissolving the solid crystals in an organic solvent"
    ],
    answerIndex: 1,
    explanation: "Resolution is the process of separating a 1:1 racemic mixture into its optically pure (+) and (-) enantiomeric components."
  },
  {
    id: 158,
    question: "How is chemical resolution of a racemic mixture typically achieved using a chiral resolving agent?",
    options: [
      "By simple distillation, because enantiomers have different boiling points",
      "By reacting the racemic mixture with an optically pure chiral reagent to form a pair of diastereomeric salts/compounds, which have different physical properties and can be separated by fractional crystallization, and then regenerating the pure enantiomers",
      "By adding a strong acid to decompose one of the enantiomers",
      "By running the mixture through a standard filter paper"
    ],
    answerIndex: 1,
    explanation: "Enantiomers have identical physical properties and cannot be separated by standard physical methods. Reacting them with an optically active chiral agent (like a chiral base) converts the enantiomers into diastereomers. Diastereomers have different physical properties (solubility), allowing them to be separated before regenerating the original pure enantiomers."
  },
  {
    id: 159,
    question: "What scientific instrument is used to detect and measure the optical activity and rotation of plane-polarized light by chiral compounds?",
    options: [
      "Spectrophotometer",
      "Polarimeter",
      "Refractometer",
      "Barometer"
    ],
    answerIndex: 1,
    explanation: "A polarimeter is a device that passes monochromatic plane-polarized light through a tube containing a solution of a chiral compound and measures the angle and direction of rotation of the light."
  },
  {
    id: 160,
    question: "Consider cis-but-2-ene and trans-but-2-ene. Which of the following statements is true regarding their dipole moments?",
    options: [
      "They both have zero dipole moments",
      "cis-But-2-ene has a net dipole moment because its methyl groups push electron density in the same direction; trans-but-2-ene has a zero dipole moment because its symmetrical groups cancel out",
      "trans-But-2-ene has a higher dipole moment than cis-but-2-ene",
      "Dipole moment is not applicable to hydrocarbons"
    ],
    answerIndex: 1,
    explanation: "In trans-but-2-ene, the two methyl-to-sp² carbon dipoles point in opposite directions and cancel out, giving a dipole moment of 0 D. In cis-but-2-ene, the dipoles point in the same direction, reinforcing each other and creating a net molecular dipole moment (~0.33 D)."
  }
];
