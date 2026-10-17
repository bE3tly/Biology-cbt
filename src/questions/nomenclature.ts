import { Question } from "../types";

export const nomenclatureQuestions: Question[] = [
  {
    id: 91,
    question: "According to IUPAC rules, what is the systematic name for the branched alkane: CH₃-CH₂-CH(CH₃)-CH(CH₃)-CH₃?",
    options: [
      "2,3-dimethylpentane",
      "3,4-dimethylpentane",
      "2-methyl-3-ethylbutane",
      "heptane"
    ],
    answerIndex: 0,
    explanation: "The longest carbon chain contains 5 carbons (pentane). Numbering from the right-hand side gives substituents at positions 2 and 3, which is lower than numbering from the left (3,4). Hence, the name is 2,3-dimethylpentane."
  },
  {
    id: 92,
    question: "What is the systematic IUPAC name of the following unsaturated hydrocarbon: CH₂=CH-CH₂-C≡CH?",
    options: [
      "pent-4-en-1-yne",
      "pent-1-en-4-yne",
      "pent-1-yn-4-ene",
      "1-penten-4-yne"
    ],
    answerIndex: 1,
    explanation: "When double and triple bonds are equidistant from the chain terminals, the double bond gets the lower locant number priority. Numbering starts from the left, giving pent-1-en-4-yne."
  },
  {
    id: 93,
    question: "Match the IUPAC suffixes correctly with their principal functional groups: Aldehyde, Ketone, Alcohol, and Carboxylic acid.",
    options: [
      "Aldehyde: -ol; Ketone: -al; Alcohol: -one; Carboxylic acid: -oic acid",
      "Aldehyde: -al; Ketone: -one; Alcohol: -ol; Carboxylic acid: -oic acid",
      "Aldehyde: -one; Ketone: -ol; Alcohol: -al; Carboxylic acid: -oate",
      "Aldehyde: -al; Ketone: -one; Alcohol: -ol; Carboxylic acid: -amide"
    ],
    answerIndex: 1,
    explanation: "By IUPAC nomenclature, aldehydes end in '-al', ketones in '-one', alcohols in '-ol', and carboxylic acids in '-oic acid'."
  },
  {
    id: 94,
    question: "What is the systematic IUPAC name for CH₃-CH(OH)-CH₂-COOH?",
    options: [
      "3-hydroxybutanoic acid",
      "2-hydroxybutanoic acid",
      "beta-hydroxybutyric acid",
      "3-hydroxypropylcarboxylic acid"
    ],
    answerIndex: 0,
    explanation: "The principal functional group is the carboxylic acid (-COOH), which defines carbon 1. The longest chain is 4 carbons (butanoic acid). A hydroxyl substituent is on carbon 3, giving 3-hydroxybutanoic acid."
  },
  {
    id: 95,
    question: "What is the systematic IUPAC name of the ether: CH₃-O-CH(CH₃)₂?",
    options: [
      "methyl isopropyl ether",
      "1-methoxypropane",
      "2-methoxypropane",
      "methyl propyl ether"
    ],
    answerIndex: 2,
    explanation: "In IUPAC naming, ethers are named as alkoxyalkanes. The larger alkyl chain is propane (3 carbons) and the methoxy group (-OCH₃) is attached at carbon 2, giving 2-methoxypropane."
  },
  {
    id: 96,
    question: "What is the key structural group that distinguishes esters from ethers and acid anhydrides?",
    options: [
      "Esters have -O- linkages; Ethers have -COO- linkages",
      "Esters have -COO- linkages; Ethers have -O- linkages; Acid anhydrides have -CO-O-CO- linkages",
      "Esters have -CO- linkages; Ethers have -CHO- linkages",
      "All three have identical functional groups"
    ],
    answerIndex: 1,
    explanation: "Esters have a carbonyl group bonded to an alkoxy group (-COO-). Ethers contain a simple oxygen bridge between two alkyl/aryl groups (-O-). Acid anhydrides have two acyl groups joined by an oxygen atom (-CO-O-CO-)."
  },
  {
    id: 97,
    question: "Nitriles are characterized by which of the following functional groups?",
    options: [
      "A carbon-nitrogen double bond, -CH=NH",
      "A carbon-nitrogen triple bond, -C≡N",
      "A nitrogen-oxygen coordinate bond, -NO₂",
      "An amino group attached to a carbonyl, -CONH₂"
    ],
    answerIndex: 1,
    explanation: "Nitriles contain a cyano group characterized by a triple bond between carbon and nitrogen (-C≡N) attached to an organic radical."
  },
  {
    id: 98,
    question: "How are amines classified as primary (1°), secondary (2°), or tertiary (3°)?",
    options: [
      "Based on the hybridization of the nitrogen atom",
      "Based on the number of alkyl or aryl groups directly bonded to the nitrogen atom",
      "Based on the number of carbons in the longest chain",
      "Based on their solubility in water"
    ],
    answerIndex: 1,
    explanation: "Unlike alcohols (which are classified based on the carbon attached to the -OH), amines are classified based on the number of organic groups directly attached to the nitrogen atom: 1 group is primary, 2 groups is secondary, and 3 groups is tertiary."
  },
  {
    id: 99,
    question: "What is the systematic IUPAC name of the acid halide: CH₃-CO-Cl?",
    options: [
      "chloromethyl ketone",
      "ethanoyl chloride",
      "acetyl chloride",
      "chloroethanoic acid"
    ],
    answerIndex: 1,
    explanation: "The molecule CH₃COCl has 2 carbons (ethanoyl) and an acyl chloride functional group, making its systematic IUPAC name ethanoyl chloride (acetyl chloride is the common name)."
  },
  {
    id: 100,
    question: "What is the IUPAC name of the secondary amine: CH₃-CH₂-NH-CH₃?",
    options: [
      "ethyl methyl amine",
      "N-methylethanamine",
      "N-ethylmethanamine",
      "dimethyl ethyl amine"
    ],
    answerIndex: 1,
    explanation: "For secondary and tertiary amines, the largest alkyl group is selected as the parent amine (ethane -> ethanamine). Other substituents on the nitrogen are prefixed with 'N-', giving N-methylethanamine."
  },
  {
    id: 101,
    question: "What is the systematic IUPAC name of the branched aldehyde: CH₃-CH(CH₃)-CHO?",
    options: [
      "2-methylpropanal",
      "2-methylpropan-1-one",
      "isobutyraldehyde",
      "butan-2-al"
    ],
    answerIndex: 0,
    explanation: "The longest chain containing the aldehyde group has 3 carbon atoms (propanal, with carbon 1 being the aldehyde carbon). There is a methyl substituent at carbon 2, yielding 2-methylpropanal."
  },
  {
    id: 102,
    question: "Which functional groups are present in a molecule of Aspirin (acetylsalicylic acid)?",
    options: [
      "Alcohol and ketone",
      "Carboxylic acid and ester",
      "Amide and phenol",
      "Ether and aldehyde"
    ],
    answerIndex: 1,
    explanation: "Aspirin contains a carboxylic acid group (-COOH) attached to a benzene ring, along with an ester group (-OCOCH₃) ortho to the acid group."
  },
  {
    id: 103,
    question: "Which functional groups are present in Paracetamol (acetaminophen)?",
    options: [
      "Amide and phenol",
      "Amine and carboxylic acid",
      "Ester and ether",
      "Ketone and alcohol"
    ],
    answerIndex: 0,
    explanation: "Paracetamol contains a phenol functional group (benzene ring with -OH) and an amide functional group (-NH-CO-CH₃) para to the hydroxyl group."
  },
  {
    id: 104,
    question: "What are the characteristic IUPAC suffixes for esters and amides, respectively?",
    options: [
      "-al and -ol",
      "-oate and -amide",
      "-one and -oic acid",
      "-nitrile and -amine"
    ],
    answerIndex: 1,
    explanation: "Esters have the suffix '-oate' (e.g., methyl ethanoate), and amides have the suffix '-amide' (e.g., ethanamide)."
  },
  {
    id: 105,
    question: "According to IUPAC priority rules, which functional group has the absolute highest priority when naming a polyfunctional organic compound?",
    options: [
      "-OH (alcohol)",
      "-CHO (aldehyde)",
      "-COOH (carboxylic acid)",
      "-NH₂ (amine)"
    ],
    answerIndex: 2,
    explanation: "Carboxylic acids (-COOH) have the highest priority of naming among common functional groups, defining the numbering direction and parent suffix of the chain."
  },
  {
    id: 106,
    question: "What is the systematic IUPAC name of the unsaturated alcohol: CH₂=CH-CH₂-OH?",
    options: [
      "prop-2-en-1-ol",
      "allyl alcohol",
      "prop-1-en-3-ol",
      "prop-1-ol-2-ene"
    ],
    answerIndex: 0,
    explanation: "The alcohol group (-OH) has priority over the double bond for numbering. The chain is numbered from the right, making carbon 1 carry the -OH and carbon 2 carry the double bond, giving prop-2-en-1-ol."
  },
  {
    id: 107,
    question: "What is the systematic IUPAC name of the unsaturated isomer shown below?",
    options: [
      "trans-but-2-ene",
      "cis-but-2-ene",
      "but-1-ene",
      "trans-pent-2-ene"
    ],
    answerIndex: 0,
    explanation: "The structure shows a carbon-carbon double bond with methyl groups on opposite sides of the double bond, which is the trans conformation of but-2-ene.",
    svgStructure: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><line x1="80" y1="60" x2="120" y2="60" stroke="currentColor" stroke-width="4" /><line x1="83" y1="54" x2="117" y2="54" stroke="currentColor" stroke-width="2" /><text x="70" y="66" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">C</text><text x="122" y="66" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">C</text><line x1="68" y1="50" x2="52" y2="30" stroke="currentColor" stroke-width="2" /><text x="40" y="25" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H</text><line x1="68" y1="70" x2="48" y2="92" stroke="currentColor" stroke-width="2" /><text x="20" y="105" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H₃C</text><line x1="132" y1="50" x2="148" y2="28" stroke="currentColor" stroke-width="2" /><text x="150" y="25" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₃</text><line x1="132" y1="70" x2="148" y2="90" stroke="currentColor" stroke-width="2" /><text x="150" y="102" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H</text></svg>`
  },
  {
    id: 108,
    question: "What is the systematic IUPAC name of the secondary alcohol represented below?",
    options: [
      "propan-1-ol",
      "propan-2-ol",
      "ethanol",
      "butan-2-ol"
    ],
    answerIndex: 1,
    explanation: "The structure shows a central CH connected to two methyl groups (-CH₃) and one hydroxyl group (-OH). The longest carbon chain is 3, with the -OH at carbon 2, making it propan-2-ol.",
    svgStructure: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><text x="92" y="65" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">CH</text><line x1="88" y1="60" x2="52" y2="60" stroke="currentColor" stroke-width="2" /><text x="14" y="65" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H₃C</text><line x1="112" y1="60" x2="148" y2="60" stroke="currentColor" stroke-width="2" /><text x="152" y="65" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₃</text><line x1="100" y1="46" x2="100" y2="24" stroke="currentColor" stroke-width="2" /><text x="92" y="18" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">OH</text></svg>`
  },
  {
    id: 109,
    question: "Assign the correct IUPAC name for this ester structure:",
    options: [
      "ethyl methanoate",
      "methyl ethanoate",
      "dimethyl ether",
      "propanoic acid"
    ],
    answerIndex: 1,
    explanation: "This is an ester containing an acetyl group (CH₃-CO-) bonded to a methoxy oxygen (-O-CH₃). The alkyl group attached to oxygen is 'methyl', and the carboxylic acid part has 2 carbons ('ethanoate'), giving methyl ethanoate.",
    svgStructure: `<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><text x="20" y="65" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H₃C</text><line x1="52" y1="60" x2="84" y2="60" stroke="currentColor" stroke-width="2" /><text x="88" y="65" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">C</text><line x1="92" y1="46" x2="92" y2="24" stroke="currentColor" stroke-width="2" /><line x1="98" y1="46" x2="98" y2="24" stroke="currentColor" stroke-width="2" /><text x="91" y="18" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">O</text><line x1="104" y1="60" x2="132" y2="60" stroke="currentColor" stroke-width="2" /><text x="136" y="65" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">O</text><line x1="152" y1="60" x2="180" y2="60" stroke="currentColor" stroke-width="2" /><text x="184" y="65" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₃</text></svg>`
  },
  {
    id: 110,
    question: "What is the systematic name for the halogenated alkane illustrated below?",
    options: [
      "1-bromobutane",
      "2-bromobutane",
      "2-bromopropene",
      "3-bromobutane"
    ],
    answerIndex: 1,
    explanation: "The carbon backbone has 4 carbons. Numbering from the left gives the bromine atom the lowest possible locant (2), so the correct IUPAC name is 2-bromobutane.",
    svgStructure: `<svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><text x="16" y="65" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H₃C</text><line x1="48" y1="60" x2="74" y2="60" stroke="currentColor" stroke-width="2" /><text x="78" y="65" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">CH</text><line x1="88" y1="72" x2="88" y2="92" stroke="currentColor" stroke-width="2" /><text x="80" y="106" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">Br</text><line x1="98" y1="60" x2="124" y2="60" stroke="currentColor" stroke-width="2" /><text x="128" y="65" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">CH₂</text><line x1="156" y1="60" x2="182" y2="60" stroke="currentColor" stroke-width="2" /><text x="186" y="65" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₃</text></svg>`
  },
  {
    id: 111,
    question: "Identify the name of the aromatic compound shown below:",
    options: [
      "benzoic acid",
      "phenol",
      "toluene",
      "aniline"
    ],
    answerIndex: 1,
    explanation: "The structure displays a benzene ring directly substituted with a hydroxyl (-OH) functional group. This compound is systematically and commonly known as phenol.",
    svgStructure: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><polygon points="100,40 135,60 135,100 100,120 65,100 65,60" fill="none" stroke="currentColor" stroke-width="2" /><line x1="100" y1="46" x2="129" y2="63" stroke="currentColor" stroke-width="1.5" /><line x1="129" y1="97" x2="100" y2="114" stroke="currentColor" stroke-width="1.5" /><line x1="71" y1="97" x2="71" y2="63" stroke="currentColor" stroke-width="1.5" /><line x1="100" y1="40" x2="100" y2="15" stroke="currentColor" stroke-width="2" /><text x="91" y="10" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">OH</text></svg>`
  },
  {
    id: 112,
    question: "Identify the correct IUPAC name of the compound with a triple bond shown below:",
    options: [
      "methanenitrile",
      "ethanenitrile",
      "propanenitrile",
      "ethanamine"
    ],
    answerIndex: 1,
    explanation: "The structure represents CH₃-C≡N, which contains 2 carbon atoms (including the nitrile carbon). Its systematic IUPAC name is ethanenitrile (also commonly called acetonitrile).",
    svgStructure: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><text x="35" y="65" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H₃C</text><line x1="68" y1="60" x2="98" y2="60" stroke="currentColor" stroke-width="2" /><text x="102" y="65" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">C</text><line x1="116" y1="60" x2="146" y2="60" stroke="currentColor" stroke-width="4" /><line x1="118" y1="54" x2="144" y2="54" stroke="currentColor" stroke-width="1.5" /><line x1="118" y1="66" x2="144" y2="66" stroke="currentColor" stroke-width="1.5" /><text x="150" y="65" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">N</text></svg>`
  },
  {
    id: 113,
    question: "What is the systematic name of the branched alkane containing a quaternary carbon atom: (CH₃)₄C?",
    options: [
      "2,2-dimethylpropane",
      "tetramethylmethane",
      "neopentane",
      "2,2-dimethylbutane"
    ],
    answerIndex: 0,
    explanation: "The longest carbon chain has 3 carbons (propane). The central carbon (carbon 2) has two methyl substituents, yielding 2,2-dimethylpropane (commonly known as neopentane)."
  },
  {
    id: 114,
    question: "What is the general molecular formula for alkenes and alkynes containing a single multiple bond?",
    options: [
      "Alkenes: C_n H_{2n+2}; Alkynes: C_n H_{2n}",
      "Alkenes: C_n H_{2n}; Alkynes: C_n H_{2n-2}",
      "Alkenes: C_n H_{2n-2}; Alkynes: C_n H_{2n+2}",
      "They have the same general formula"
    ],
    answerIndex: 1,
    explanation: "The general formula for an alkene with one double bond is CnH2n (representing one degree of unsaturation). The general formula for an alkyne with one triple bond is CnH2n-2 (representing two degrees of unsaturation)."
  },
  {
    id: 115,
    question: "Which of the following organic structures is categorized as a heterocyclic compound?",
    options: [
      "Benzene",
      "Cyclohexane",
      "Pyridine",
      "Naphthalene"
    ],
    answerIndex: 2,
    explanation: "Heterocyclic compounds are cyclic organic compounds where one or more carbon atoms in the ring are replaced by heteroatoms like Nitrogen, Oxygen, or Sulfur. Pyridine contains a six-membered ring with five carbons and one nitrogen atom, making it heterocyclic."
  }
];
